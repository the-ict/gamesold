"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const UserAccount_1 = __importDefault(require("../models/UserAccount"));
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback"
}, async (accessToken, refreshToken, profile, cb) => {
    const existingUser = await UserAccount_1.default.findOne({ googleId: profile.id });
    if (existingUser) {
        return cb(null, existingUser);
    }
    const newUser = await new UserAccount_1.default({
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        image: profile.photos[0].value,
        name: (profile.name.givenName + profile.name.familyName).trim().toLowerCase(),
    }).save();
    console.log("New user created:", newUser);
    return cb(null, newUser);
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

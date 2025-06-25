const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
import UserModel from '../models/UserAccount';

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback"
},
    async (accessToken: string, refreshToken: string, profile: {
        id: string;
        displayName: string;
        name: {
            familyName: string;
            givenName: string;
        };
        emails: Array<{ value: string }>;
        photos: Array<{ value: string }>;
    }, cb: Function) =>{
        const existingUser = await UserModel.findOne({ googleId: profile.id });
        if(existingUser) {
            return cb(null, existingUser);
        }
        const newUser = await new UserModel({
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
    }
));

passport.serializeUser(function (user: object, done: Function) {
    done(null, user);
});

passport.deserializeUser(function (user: object, done: Function) {
    done(null, user);
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const UserAccount_1 = __importDefault(require("../models/UserAccount"));
// findind a user account by user id on the database
router.get("/:id", async (req, res, next) => {
    try {
        const userAccount = await UserAccount_1.default.findById(req.params.id);
        if (userAccount) {
            res.json(userAccount);
        }
        else {
            res.status(404).send("User account not found");
        }
    }
    catch (error) {
        next(error);
    }
});
// get all user accounts
router.get("/", async (req, res, next) => {
    try {
        const userAccounts = await UserAccount_1.default.find();
        res.json(userAccounts);
    }
    catch (error) {
        next(error);
    }
});
router.post("/save", async (req, res, next) => {
    try {
        const { userId, accountId } = req.body;
        const userAccount = await UserAccount_1.default.findById(userId);
        if (!userAccount) {
            return res.status(404).send("User account not found");
        }
        if (!userAccount.savedAccounts.includes(accountId)) {
            userAccount.savedAccounts.push(accountId);
            await userAccount.save();
        }
        res.status(200).json(userAccount);
    }
    catch (error) {
        next(error);
    }
});
router.post("/unsave", async (req, res, next) => {
    try {
        const { userId, accountId } = req.body;
        const userAccount = await UserAccount_1.default.findById(userId);
        if (!userAccount) {
            return res.status(404).send("User account not found");
        }
        const index = userAccount.savedAccounts.indexOf(accountId);
        if (index !== -1) {
            userAccount.savedAccounts.splice(index, 1);
            await userAccount.save();
        }
        res.status(200).json(userAccount);
    }
    catch (error) {
        next(error);
    }
});
router.put("/balance/:userId", async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { balance } = req.body;
        const userAccount = await UserAccount_1.default.findByIdAndUpdate(userId, { balance }, { new: true });
        if (!userAccount) {
            return res.status(404).send("User account not found");
        }
        res.status(200).json(userAccount);
    }
    catch (error) {
        next(error);
    }
});
module.exports = router;

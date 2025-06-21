"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const UserAccount_1 = __importDefault(require("../models/UserAccount"));
// findind a user account by user id on the database
router.get('/:id', async (req, res, next) => {
    try {
        const userAccount = await UserAccount_1.default.findById(req.params.id);
        if (userAccount) {
            res.json(userAccount);
        }
        else {
            res.status(404).send('User account not found');
        }
    }
    catch (error) {
        next(error);
    }
});
// contorlling a user chats
module.exports = router;

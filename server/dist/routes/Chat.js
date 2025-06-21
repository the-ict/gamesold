"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const Chat_1 = __importDefault(require("../models/Chat"));
const UserAccount_1 = __importDefault(require("../models/UserAccount"));
// Get chat data by chat ID
router.get('/:id', async (req, res, next) => {
    try {
        const chat = await Chat_1.default.findById(req.params.id);
        if (chat) {
            res.json(chat);
        }
        else {
            res.status(404).send('Chat not found');
        }
    }
    catch (error) {
        next(error);
    }
});
// Create a new chat
router.post('/', async (req, res, next) => {
    try {
        const { usersId } = req.body;
        if (!usersId || !Array.isArray(usersId) || usersId.length === 0) {
            return res.status(400).send('Invalid usersId');
        }
        const newChat = new Chat_1.default({ usersId });
        await newChat.save();
        res.status(201).json(newChat);
    }
    catch (error) {
        next(error);
    }
});
// get user's chats data by user ID in the chat
router.get('/user/:userId', async (req, res, next) => {
    try {
        const chats = await Chat_1.default.find({ usersId: req.params.userId });
        res.json(chats);
    }
    catch (error) {
        next(error);
    }
});
// adding chat id to a user
router.post('/addChatId', async (req, res, next) => {
    var _a;
    try {
        const { userId, chatId } = req.body;
        const oneuser = await UserAccount_1.default.findById(userId);
        if (!oneuser) {
            return res.status(404).send('User not found');
        }
        (_a = oneuser.chats) === null || _a === void 0 ? void 0 : _a.push(chatId);
        await oneuser.save();
        res.status(201).json(oneuser);
    }
    catch (error) {
        next(error);
    }
});
module.exports = router;

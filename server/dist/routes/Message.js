"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const Message_1 = __importDefault(require("../models/Message"));
// getting chat messages
router.get('/messages', async (req, res) => {
    try {
        const { sender, receiver } = req.query;
        if (!sender || !receiver) {
            return res.status(400).json({ error: "Sender and receiver are required" });
        }
        const messages = await Message_1.default.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        }).sort({ timestamp: 1 });
        res.json(messages);
    }
    catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// sending a chat message
router.post('/messages', async (req, res) => {
    try {
        const { sender, receiver, content, chatId } = req.body;
        if (!sender || !receiver || !content) {
            return res.status(400).json({ error: "Sender, receiver, and content are required" });
        }
        const newMessage = new Message_1.default({
            sender,
            receiver,
            content,
            chatId,
            timestamp: new Date()
        });
        await newMessage.save();
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports = router;

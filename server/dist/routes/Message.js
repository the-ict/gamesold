"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const Messages = require('../models/Message');
// getting chat messages
router.get('/messages', async (req, res) => {
    try {
        const { sender, receiver } = req.query;
        if (!sender || !receiver) {
            return res.status(400).json({ error: "Sender and receiver are required" });
        }
        const messages = await Messages.find({
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

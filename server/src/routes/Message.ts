const router = require('express').Router();
import Messages from '../models/Message';
import { Request, Response } from 'express';


// getting chat messages
router.get('/messages', async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// sending a chat message
router.post('/messages', async (req: Request, res: Response) => {
  try {
    const { sender, receiver, content, chatId } = req.body;

    if (!sender || !receiver || !content) {
      return res.status(400).json({ error: "Sender, receiver, and content are required" });
    }

    const newMessage = new Messages({
      sender,
      receiver,
      content,
      chatId,
      timestamp: new Date()
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router
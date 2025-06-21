const router = require('express').Router();
import Chat from '../models/Chat';
import User from '../models/UserAccount';
import { Request, Response, NextFunction } from 'express';

// Get chat data by chat ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chat = await Chat.findById(req.params.id);
        if (chat) {
            res.json(chat);
        } else {
            res.status(404).send('Chat not found');
        }
    } catch (error) {
        next(error);
    }
});

// Create a new chat
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { usersId } = req.body;
        if (!usersId || !Array.isArray(usersId) || usersId.length === 0) {
            return res.status(400).send('Invalid usersId');
        }
        const newChat = new Chat({ usersId });
        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        next(error);
    }
});

// get user's chats data by user ID in the chat
router.get('/user/:userId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chats = await Chat.find({ usersId: req.params.userId });
        res.json(chats);
    } catch (error) {
        next(error);
    }
});

// adding chat id to a user
router.post('/addChatId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, chatId } = req.body;
        const oneuser = await User.findById(userId);
        if (!oneuser) {
            return res.status(404).send('User not found');
        }

        oneuser.chats?.push(chatId)
        await oneuser.save();
        res.status(201).json(oneuser);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
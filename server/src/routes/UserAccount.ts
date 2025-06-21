const router= require('express').Router();
import UserAccount from '../models/UserAccount';
import { Request, Response, NextFunction } from 'express';


// findind a user account by user id on the database
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userAccount = await UserAccount.findById(req.params.id);
        if (userAccount) {
            res.json(userAccount);
        } else {
            res.status(404).send('User account not found');
        }
    } catch (error) {
        next(error);
    }
});

// contorlling a user chats




module.exports = router
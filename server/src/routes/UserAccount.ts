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

// get all user accounts
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userAccounts = await UserAccount.find();
        res.json(userAccounts);
    } catch (error) {
        next(error);
    }
});




module.exports = router
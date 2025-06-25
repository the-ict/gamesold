const router = require('express').Router();
import User from "../models/UserAccount";
import { Request, Response, NextFunction } from "express";

router.post("/register", async (req: Request, res: Response, next:NextFunction) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,          
            password: req.body.password,
            image: req.body.image || "",
            balance: req.body.balance || 0,
            savedAccounts: req.body.savedAccounts || [],
            tranzactions: req.body.tranzactions || [],
            accounts: req.body.accounts || [],
            displayName: req.body.displayName || "",
            firstName: req.body.firstName || "",
            lastName: req.body.lastName || ""
        });
        
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
}) 


router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email:email})
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if(user.password !== password) {
            return res.status(401).json({message: "Invalid password"});
        }

        res.status(200).json({
            message: "Login successful",
            user
        });
    }catch(error) {
        next(error);
    }
})

module.exports = router;
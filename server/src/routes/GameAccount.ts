const router = require('express').Router();
import GameAccount from "../models/GameAccount";
import { Request, Response, NextFunction } from "express";


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gameAccounts = await GameAccount.find();
        res.json(gameAccounts);
    } catch (error) {
        next(error);
    }
});

router.get("/search", async (req: Request, res: Response, next: NextFunction) => {
    try {  
        const {name, platform,  mixPrice, maxPrice} = req.query;
        const { Op } = require("sequelize");
      
        const where: any = {};
        if (name) {
            where.name = { [Op.like]: `%${name}%` };
        }
        if (platform) {
            where.platform = { [Op.like]: `%${platform}%` };
        }
        if (mixPrice && !isNaN(Number(mixPrice))) {
            where.price = { [Op.gte]: Number(mixPrice) };
        }
        
        if (maxPrice && !isNaN(Number(maxPrice))) {
            where.price = { ...where.price, [Op.lte]: Number(maxPrice) };
        }

        const gameAccounts = await GameAccount.find({ where });

        res.json(gameAccounts);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gameAccount = await GameAccount.findById(req.params.id);
        if (gameAccount) {
            res.json(gameAccount);
        } else {
            res.status(404).send("Game account not found");
        }
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newGameAccount = await GameAccount.create(req.body);
        res.status(201).json(newGameAccount);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedGameAccount = await GameAccount.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedGameAccount) {
            res.json(updatedGameAccount);
        } else {
            res.status(404).send("Game account not found");
        }
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deleted = await GameAccount.findByIdAndDelete(req.params.id);
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send("Game account not found");
        }
    } catch (error) {
        next(error);
    }
});


module.exports = router;
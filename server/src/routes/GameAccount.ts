const router = require('express').Router();
const GameAccount = require("../models/GameAccount");
import { Request, Response, NextFunction } from "express";


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gameAccounts = await GameAccount.findAll();
        res.json(gameAccounts);
    } catch (error) {
        next(error);
    }
});


router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gameAccount = await GameAccount.findByPk(req.params.id);
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
        const [updated] = await GameAccount.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedGameAccount = await GameAccount.findByPk(req.params.id);
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
        const deleted = await GameAccount.destroy({
            where: { id: req.params.id }
        });
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
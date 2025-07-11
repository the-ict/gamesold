"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const GameAccount_1 = __importDefault(require("../models/GameAccount"));
router.get("/", async (req, res, next) => {
    try {
        const gameAccounts = await GameAccount_1.default.find();
        res.json(gameAccounts);
    }
    catch (error) {
        next(error);
    }
});
router.get("/search", async (req, res, next) => {
    try {
        const { name, platform, mixPrice, maxPrice } = req.query;
        const query = {};
        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (platform) {
            query.platform = { $regex: platform, $options: "i" };
        }
        if (mixPrice && !isNaN(Number(mixPrice))) {
            query.price = { $gte: Number(mixPrice) };
        }
        if (maxPrice && !isNaN(Number(maxPrice))) {
            query.price = { ...query.price, $lte: Number(maxPrice) };
        }
        const gameAccounts = await GameAccount_1.default.find(query);
        console.log(gameAccounts, "gameAccounts that got");
        res.json(gameAccounts);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id", async (req, res, next) => {
    try {
        const gameAccount = await GameAccount_1.default.findById(req.params.id);
        if (gameAccount) {
            res.json(gameAccount);
        }
        else {
            res.status(404).send("Game account not found");
        }
    }
    catch (error) {
        next(error);
    }
});
router.post("/", async (req, res, next) => {
    try {
        const newGameAccount = await GameAccount_1.default.create(req.body);
        res.status(201).json(newGameAccount);
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        const updatedGameAccount = await GameAccount_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedGameAccount) {
            res.json(updatedGameAccount);
        }
        else {
            res.status(404).send("Game account not found");
        }
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", async (req, res, next) => {
    try {
        const deleted = await GameAccount_1.default.findByIdAndDelete(req.params.id);
        if (deleted) {
            res.status(204).send("Game account deleted successfully");
        }
        else {
            res.status(404).send("Game account not found");
        }
    }
    catch (error) {
        next(error);
    }
});
router.get("/search/most-expensive", async (req, res) => {
    try {
        const mostExpensive = await GameAccount_1.default.find({ status: "available" })
            .sort({ price: -1 })
            .limit(8);
        res.json(mostExpensive);
    }
    catch (error) {
        res.status(404).send("No accounts found");
    }
});
router.get("/author/:authorId", async (req, res) => {
    try {
        const gameAccounts = await GameAccount_1.default.find({
            author: req.params.authorId,
        });
        res.json(gameAccounts);
    }
    catch (error) {
        res.status(404).send("No accounts found");
    }
});
module.exports = router;

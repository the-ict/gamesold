"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Message_1 = __importDefault(require("../models/Message"));
const router = express_1.default.Router();
router.post("/", async (req, res) => {
    try {
        const newMessage = await Message_1.default.create(req.body);
        res.status(201).json(newMessage);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create message" });
    }
});
router.get("/:conversationId", async (req, res) => {
    try {
        const messages = await Message_1.default.find({
            conversationId: req.params.conversationId,
        });
        if (messages) {
            res.status(200).json(messages);
        }
        else {
            res
                .status(404)
                .json("MNessages not found, may be conversationId is wrong!");
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to get messages" });
    }
});
module.exports = router;

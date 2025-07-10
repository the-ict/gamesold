"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Conversation_1 = __importDefault(require("../models/Conversation"));
const router = express_1.default.Router();
// create a new conversation
router.post("/", async (req, res) => {
    try {
        const newConversation = await Conversation_1.default.create(req.body);
        res.status(201).json(newConversation);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create conversation" });
    }
});
// get a conversation
router.get("/:id", async (req, res) => {
    try {
        const conversation = await Conversation_1.default.find({
            members: {
                $in: [req.params.id],
            },
        });
        if (conversation) {
            res.json(conversation);
        }
        else {
            res.status(404).send("Conversation not found");
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to get conversation" });
    }
});
module.exports = router;

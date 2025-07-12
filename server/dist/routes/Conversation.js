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
// get a conversation by its own _id
router.get("/conversation/:conversationId", async (req, res) => {
    try {
        const conversation = await Conversation_1.default.findById(req.params.conversationId);
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
// check if conversation between two users exist
router.get("/:userId1/:userId2", async (req, res) => {
    try {
        const conversation = await Conversation_1.default.findOne({
            members: {
                $all: [req.params.userId1, req.params.userId2],
            },
        }).sort({ members: 1 });
        if (conversation) {
            res.status(200).json(conversation);
        }
        else {
            res.status(200).json({
                exist: false,
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to check conversation" });
    }
});
module.exports = router;

import express from "express";
import Conversation from "../models/Conversation";

const router = express.Router();

// create a new conversation
router.post("/", async (req, res) => {
  try {
    const newConversation = await Conversation.create(req.body);
    res.status(201).json(newConversation);
  } catch (error) {
    res.status(500).json({ error: "Failed to create conversation" });
  }
});

// get a conversation
router.get("/:id", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {
        $in: [req.params.id],
      },
    });
    if (conversation) {
      res.json(conversation);
    } else {
      res.status(404).send("Conversation not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get conversation" });
  }
});

module.exports = router;

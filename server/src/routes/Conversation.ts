import express from "express";
import Conversation, { IConversation } from "../models/Conversation";
import UserAccount from "../models/UserAccount";

const router = express.Router();

// create a new conversation
router.post("/", async (req, res) => {
  try {
    const { members }: IConversation = req.body
    const newConversation = await Conversation.create(req.body);

    members.forEach(async (member) => {
      await UserAccount.findByIdAndUpdate(member, {
        $push: {
          chats: newConversation._id
        }
      })
    });

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

// get a conversation by its own _id
router.get("/conversation/:conversationId", async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.conversationId);
    if (conversation) {
      res.json(conversation);
    } else {
      res.status(404).send("Conversation not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get conversation" });
  }
});

// check if conversation between two users exist
router.get("/:userId1/:userId2", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: {
        $all: [req.params.userId1, req.params.userId2],
      },
    }).sort({ members: 1 });
    if (conversation) {
      res.status(200).json(conversation);
    } else {
      res.status(200).json({
        exist: false,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to check conversation" });
  }
});

module.exports = router;

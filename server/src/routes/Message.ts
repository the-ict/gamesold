import express from "express";
import Message from "../models/Message";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to create message" });
  }
});

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });

    if (messages) {
      res.status(200).json(messages);
    } else {
      res
        .status(404)
        .json("MNessages not found, may be conversationId is wrong!");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get messages" });
  }
});

module.exports = router;

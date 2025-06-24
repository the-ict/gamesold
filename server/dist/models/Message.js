"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const messageSchema = new mongoose_2.Schema({
    sender: { type: mongoose_2.Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: mongoose_2.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    chatId: { type: mongoose_2.Schema.Types.ObjectId, ref: "Chat", required: true }, // Unique identifier for the chat
}, {
    timestamps: true, // Disable automatic _id field generation
});
const Message = mongoose_1.default.model("Message", messageSchema);
exports.default = Message;

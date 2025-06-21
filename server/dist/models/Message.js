"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const messageSchema = new mongoose_2.Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    content: { type: String, required: true },
    chatId: { type: String, required: true }, // Unique identifier for the chat
}, {
    timestamps: { createdAt: 'timestamp', updatedAt: false },
    _id: false // Disable automatic _id field generation
});
const Message = mongoose_1.default.model("Message", messageSchema);
exports.default = Message;

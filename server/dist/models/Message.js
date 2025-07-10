"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    conversationId: { type: String, required: true },
    sender: { type: String, required: true },
    text: { type: String, required: true },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Message", messageSchema);

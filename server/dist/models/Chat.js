"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    usersId: [{ type: String, required: true }],
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields}
    _id: true,
});
exports.default = (0, mongoose_1.model)('Chat', chatSchema);

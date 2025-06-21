"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    usersId: [{ type: String, required: true }],
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});
exports.default = (0, mongoose_1.model)('Chat', chatSchema);

import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  sender: string;
  receiver: string;
  content: string;
  timestamp: Date;
  chatId: string
}

const messageSchema = new Schema<IMessage>({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  content: { type: String, required: true },
  chatId: { type: String, required: true }, // Unique identifier for the chat
}, {
  timestamps: { createdAt: 'timestamp', updatedAt: false },
  _id: false // Disable automatic _id field generation
}); 

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;
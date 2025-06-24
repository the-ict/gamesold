import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  sender: string | mongoose.Types.ObjectId;
  receiver: string | mongoose.Types.ObjectId;
  content: string; 
  timestamp: Date;
  chatId: mongoose.Types.ObjectId; 
}

const messageSchema = new Schema<IMessage>({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  chatId: { type: Schema.Types.ObjectId, ref:  "Chat", required: true }, // Unique identifier for the chat
}, {
  timestamps: true, // Disable automatic _id field generation
}); 

const Message = mongoose.model<IMessage>("Message", messageSchema);
export default Message;
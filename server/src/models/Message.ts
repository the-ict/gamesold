import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface IMessage extends Document {
  sender: string;
  receiver: string;
  content: string;
  timestamp: Date;
}

const messageSchema = new Schema<IMessage>({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  content: { type: String, required: true },
}, {
  timestamps: { createdAt: 'timestamp', updatedAt: false }
}); 

const Message = mongoose.model<IMessage>("Message", messageSchema);

export default Message;
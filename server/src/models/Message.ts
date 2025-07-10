import mongoose from "mongoose";

interface IMessage extends mongoose.Document {
  conversationId: string;
  sender: string;
  text: string;
  timestamp: Date;
}

const messageSchema = new mongoose.Schema<IMessage>(
  {
    conversationId: { type: String, required: true },
    sender: { type: String, required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IMessage>("Message", messageSchema);
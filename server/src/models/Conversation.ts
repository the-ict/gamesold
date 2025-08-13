import mongoose, { Document } from "mongoose";

export interface IConversation extends Document {
  members: string[];
}

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IConversation>(
  "Conversation",
  ConversationSchema
);

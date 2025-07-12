import mongoose, { Document, Schema } from "mongoose";

export interface IGameAccount extends Document {
  author: string;
  game: "PUBG" | "Fortnite" | "CSGO" | "Call of Duty";
  region: string;
  price: number; // in o'zbek so'm
  description: string;
  image?: string;
  seller: mongoose.Types.ObjectId;
  buyer?: mongoose.Types.ObjectId;
  status: "available" | "pending" | "sold";
  video: string;
  name: string;
}

const gameAccountSchema = new Schema(
  {
    author: { type: String, required: true },
    game: {
      type: String,
      required: true,
      enum: ["PUBG", "Fortnite", "CSGO", "Call of Duty"],
    },
    region: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["available", "pending", "sold"],
      default: "available",
    },
    video: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IGameAccount>("GameAccount", gameAccountSchema);

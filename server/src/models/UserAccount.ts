import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
    name: string,
    email: string,
    password?: string,
    image: string,
    balance: number,
    savedAccounts: string[],
    tranzactions: object[],
    accounts: string[],
    googleId?: string,
    displayName?: string,
    firstName?: string,
    lastName?: string,
    chats?: string[]
}

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    image: { type: String, default: "" },
    balance: { type: Number, default: 0 },
    savedAccounts: { type: [String], default: [] },
    tranzactions: { type: [Object], default: [] },
    accounts: { type: [String], default: [] },
    googleId: { type: String, unique: true, sparse: true , required: false},
    displayName: { type: String, default: "" },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    chats: { type: [String], default: [] }
}, {
    timestamps: true,     
});

export default mongoose.model<IUser>("User", userSchema);
import {Schema, model, Document} from 'mongoose';

export interface IChat extends Document {
    usersId: string[];
}

const chatSchema = new Schema<IChat>({
    usersId: [{ type: String, required: true }],
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields}
    _id: true,
});


export default model<IChat>('Chat', chatSchema);
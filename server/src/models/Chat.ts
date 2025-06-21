import {Schema, model, Document} from 'mongoose';

export interface IChat extends Document {
    usersId: string[];
}

const chatSchema = new Schema<IChat>({
    usersId: [{ type: String, required: true }],
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});


export default model<IChat>('Chat', chatSchema);
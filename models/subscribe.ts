import mongoose, { Model, Document, Schema  } from "mongoose";

interface subscribe extends Document{
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const subscribeSchema = new Schema<subscribe>(
    {
        email: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const subscribeModel: Model<subscribe> = mongoose.models.subscribe || mongoose.model<subscribe>("subscribe", subscribeSchema);
export default subscribeModel;
import mongoose, {Model, Schema, Document} from "mongoose";

interface project extends Document{
    title: string;
    tech: string;
    link: string;
    description: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    client: string;
    images: string[];
}
const projectShema = new Schema<project>(
    {
        title: String,
        tech: String,
        link: String,
        description: String,
        images: [{ type: String }],
        status: {type: String, enum: ['completed', 'pending'], default: 'pending'},
        client: String
    },
    {
        timestamps: true,
    }
)
const projectModel:Model<project> = mongoose.models.projectShema || mongoose.model<project>("projects", projectShema);

export default projectModel;


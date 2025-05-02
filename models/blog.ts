import mongoose, {Schema, Model, Document} from "mongoose";

interface blog extends Document{
    topic: string;
    article: string;
    createdAt?: Date;
    updatedAt?: Date;
    images: [],

}
const blogSchema = new Schema<blog>(
    {
        topic: {
            type:String,
            required: true,
        },
        article: {
            type: String,
            required: true
        },
        images: [{ type: String }],

    },
    {
        timestamps: true
    }
);

const blogModel: Model<blog> = mongoose.models.blog || mongoose.model<blog>("blog", blogSchema);

export default blogModel;
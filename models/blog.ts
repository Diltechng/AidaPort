import mongoose, {Schema, Model, Document} from "mongoose";

interface blog extends Document{
    topic: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
const blogSchema = new Schema<blog>(
    {
        topic: {
            type:String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
       
    },
    {
        timestamps: true
    }
);

const blogModel: Model<blog> = mongoose.models.blog || mongoose.model<blog>("blog", blogSchema);

export default blogModel;
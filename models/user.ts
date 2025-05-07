import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
    name: String,
    email: String,
    password: String
},
    {
        timestamps: true,
    }
)

const userModel = mongoose.models.userSchema || mongoose.model("user", userSchema);

export default userModel
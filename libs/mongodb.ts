import mongoose from "mongoose";

export const connDB = async() =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connection Success'))
    .catch(err => console.error('error in connection', err));
    
}
    


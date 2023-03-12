
 import mongoose from "mongoose";

export const Connection =async()=>{
    const URl ='mongodb+srv://ayesha:website@cluster0.cggolch.mongodb.net/e-commerce?retryWrites=true&w=majority';
    try {
       await mongoose.connect(URl,
            {useNewUrlParser:true,useUnifiedTopology:true});
            console.log('successfully connected with database')
    } catch (error) {
        console.log("Error while connecting with database",error.message)
    }
}
export default Connection
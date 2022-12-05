import mongoose, { Mongoose } from "mongoose";

const Schema= mongoose.Schema
const feedBackSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    serviceused:{
        type:String,
        required:true,
        unique:false,
    },
    message:{
        type:String,
        required:false,
        unique:false,
    }
},{
    timestamps:true
}
)
const feedBack= mongoose.model("Feedback Table",feedBackSchema)
export default feedBack;
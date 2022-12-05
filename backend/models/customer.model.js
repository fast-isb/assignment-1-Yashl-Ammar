import mongoose from "mongoose";

const Schema= mongoose.Schema

const customerSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:false,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:false,
    },
    password:{
        type:String,
        required:true,
        unique:false,
    },
    phoneNum:{
        type: String, 
        required: true, 
        unique: false, 
    },
    Address:{
        type:String,
        required:true,
        unique:false,
    },


},
{
    timestamps:true
})

const Customer=mongoose.model("Customer Table",customerSchema)

export default Customer
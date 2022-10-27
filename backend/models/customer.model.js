import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    userName: { type: String, required: true, unique: true, trim: true, minlength: 3},
    name:{type: String, required: true},
    email:{type:String,required:true},
    phoneNum:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    banned : {type: Boolean, required: true, unique: false, trim: true,},
  
  }, {
    timestamps: true,
  });


  const Customer = mongoose.model('customers', customerSchema);
  export default Customer;
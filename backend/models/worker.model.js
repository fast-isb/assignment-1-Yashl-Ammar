import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workerSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3},
  fname : {type: String, required: true, minlength: 1},
  lname : {type: String, required: true, minlength: 1},
  dob : {type: Date, required: true, unique: false, trim: true, minlength: 1},
  pNo : {type: String, required: true, unique: false, trim: true, minlength: 1},
  domain : {type: String, required: true, unique: false, trim: true, minlength: 1},
  service : {type: String, required: true, unique: false, trim: true, minlength: 1},
  hNo : {type: String, required: true, unique: false, trim: true, minlength: 1},
  street : {type: String, required: true, unique: false, trim: true, minlength: 1},
  sector : {type: String, required: true, unique: false, trim: true, minlength: 1},
  city : {type: String, required: true, unique: false, trim: true, minlength: 1},
  password : {type: String, required: true, unique: false, trim: true, minlength: 4},
  banned : {type: Boolean, required: true, unique: false, trim: true,},

}, {
  timestamps: true,
});

const Worker = mongoose.model('Worker', workerSchema);

export default Worker;
import mongoose from "mongoose";
import { type } from "os";

const bookSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true,
    trim: true,
    maxLength: 100

  }, 
  author : {
    type:String,
    required: true,
    trim:true

  }, 
  year : {
    type: Number,
    require: true,
    min: 1000,
    max: new Date().getFullYear()

  }, 
  createdAt : {
    type:Date,
    default:  Date.now()
  }, 
})

const bookModel = mongoose.model("Book",bookSchema)

export default bookModel

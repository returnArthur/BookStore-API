import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`database is connected sucessfully at ${url}`)
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;

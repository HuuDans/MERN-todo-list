import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Connect thanh cong");
  } catch (error) {
    console.error("Ket noi that bai!", error);
    process.exit(1); //exit with error
  }
};

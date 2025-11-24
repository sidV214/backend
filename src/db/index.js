import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  // async-await => bcuz DB IS IN ANOTHER CONTINENT
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    ); // mongoose ek object return karta hai; response jo connection hone ke baad  milra hai usko hold kar sakte hain
    console.log(
      `\n MongoDB connected successfully !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection error: ", error);
    process.exit(1);
    // nodeJS access deta hai 'process' ka, isko use kar sakte hain kahi bhi bina import kiye; Process kya hai => jo current application chal rahi hai vo kisi na kisi process pe chal rahi hai, ye usi ka reference hai [NODE mein PADHO ]
  }
};
export default connectDB;
 
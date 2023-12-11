import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("before ongo connect");
    const letsConnect = await mongoose.connect("mongodb://varaprasad:Vachira_04@mymongo:27017/cyber-note?authSource=admin", {
      useNewUrlParser: true,
    });
    // const letsConnect = await mongoose.connect("mongodb://varaprasad:Vachira_04@mymongo:27017/cyber-note", {
    //   useNewUrlParser: true,
    // });
    // console.log("MONGODB_URI:", process.env.MONGODB_URI);
    console.log(`MongoDB is connected`);
  } catch (err) {
    console.log(`MongoDB Error : ${err.message}`);
    process.exit();
  }
};
import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  const DATABASE_URL = "mongodb://localhost:27017/pradeep";
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      chalk.bgGreen(`Connected To MongoDB Database ${con.connection.host}`)
    );
  } catch (error) {
    console.log(
      chalk.bgRedBright(`Error in Mongoose Database connection ${error}`)
    );
  }
};

export default connectDB;

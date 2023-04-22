import express from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import departmentRoute from "./routes/departmentRoute.js";

// config env
dotenv.config();

// mongoDB database connection
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/department", departmentRoute);

// rest api
app.use("/", (req, res) => {
  //   res.status(200).send({
  //     success: true,
  //     message: "Welcome to api",
  //   });
  res.send("<h1>Welcome TO Api E-commerce Application</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    chalk.bgMagentaBright(
      `App is running on ${process.env.DEV_MODE}mode on PORT ${PORT} on port`
    )
  );
});

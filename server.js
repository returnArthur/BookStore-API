import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./database/db.js";
import router from "./routes/book-routes.js";

configDotenv();
const app = express();
connectDB(process.env.DATABASE_URL);

app.use(express.json());

app.use("/api/books", router);

app.listen(process.env.PORT, () =>
  console.log(`server listening at port ${process.env.PORT}`),
);

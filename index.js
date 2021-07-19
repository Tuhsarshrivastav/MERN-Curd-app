import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import Routes from "./server/route.js";

const app = express(); // we need to do this with every express application to
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", Routes);

const URL =
  "mongodb://user:codeforinterview@crud-shard-00-00.zgrax.mongodb.net:27017,crud-shard-00-01.zgrax.mongodb.net:27017,crud-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-qnhkkq-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || "5000";
mongoose
  .connect(
    "",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

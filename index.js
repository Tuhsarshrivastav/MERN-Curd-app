const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const Routes = require("./server/route");

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", Routes);

const URL =
  "mongodb://user:password@crud-shard-00-00.zgrax.mongodb.net:27017,crud-shard-00-01.zgrax.mongodb.net:27017,crud-shard-00-02.zgrax.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-qnhkkq-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

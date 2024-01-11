const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const empRouter = require("./routes/empRoute");
// const bodyParser = require("body-parser");

dotenv.config();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(cors());

app.use("/employee", empRouter);

app.listen(9000, () => {
  console.log("your app is running on port", 9000);
  console.log("DB URI:", process.env.DB);
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Server connected");
    })
    .catch((error) => {
      console.log(error);
    });
  
});

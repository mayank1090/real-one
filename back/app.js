const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connection/connect");
const cors = require("cors");
const dataRouter = require("./routes/data");
// const expressWs = require('express-ws')(app);
dotenv.config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: false}))
app.use(cors());



const router = require("./routes/router");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/", router);
app.use(dataRouter);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    const port = process.env.PORT || 3003;
    app.listen(port, () => {
      console.log(`server is running on port - ${port}`);
      console.log("Database is connected!");
    });
  } catch (error) {
    console.log(error);
  }
};
startDB();

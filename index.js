const express = require("express");
const app = express();
const todoRoute = require("./routes/todo");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");

// parsing the application
app.use(bodyParser.json());

// connect database
connectDb();

// middleware
const logger = (req, res, next) => {
  console.log("Logging the values");
  req.name = "Navneet";
  next();
  // res.send("Success");
};
app.use(logger);

app.use("/api/todo/", todoRoute);
app.use("/api/user/", userRoute);
app.use("/api/task/", taskRoute);

app.get("*", (req, res) => {
  res.status(400);
  console.log("Sorry this url doesn't exist");
  res.send("Sorry thus url does not exist");
});

app.listen(9000, () => {
  console.log("Server is listening to port 9000");
});

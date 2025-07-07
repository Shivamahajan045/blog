const express = require("express");
const path = require("path");
const app = express();
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const sequelize = require("./utils/database");

const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", signupRouter);
app.use("/", loginRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

sequelize.sync({ force: false });

app.listen(port, () => {
  console.log(
    "Server is up and running on port 3000! Ready to handle requests."
  );
});

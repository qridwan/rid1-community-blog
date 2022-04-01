const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
//import routers
const authRoute = require("./routes/authRoute");

//Setup view engine
app.set("view engine", "ejs");
app.set("views", "views");

//Middleware array
const middleware = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
];
app.use(middleware);
app.use("/auth", authRoute);
app.get("/", (req, res) => {
  // res.render("pages/auth/signup", { title: "Sign Up" });
  res.json({
    message: "Hollo world",
  });
});

const PORT = process.env.PORT || 8080;
mongoose
  .connect(
    "mongodb+srv://ImRidwan:this.main@cluster0.q83cw.mongodb.net/xyz_blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
      console.log("server is running on port " + PORT);
    });
  })
  .catch((e) => console.log("err", e));

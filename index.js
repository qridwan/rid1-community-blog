const express = require("express");
const app = express();
const morgan = require("morgan");
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

app.get("/", (req, res) => {
  res.render("pages/auth/signup", { title: "Sign Up" });
  res.json({
    message: "Hollo world",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

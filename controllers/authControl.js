const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.signupGetController = (req, res, next) => {
  res.render("pages/auth/signup", { title: "Sign Up" });
};
exports.signupPostController = async (req, res, next) => {
  //   console.log("req: ", req.body);
  const { username, email, password, confirmPassword } = req.body;

  try {
    let hashedPassword = await bcrypt.hash(password, 11);
    let user = new User({
      username,
      email,
      password: hashedPassword,
    });

    let createUser = await user.save();
    console.log("createUser created successfull: ", createUser);
    res.render("pages/auth/signup", { title: "Sign Up" });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
  //   console.log("user: ", user);
};

exports.loginGetController = (req, res, next) => {
  res.render("pages/auth/login", { title: "Login" });
};
exports.loginPostController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    console.log("user: ", user);
    if (!user) {
      res.json({ message: "Invalid Credential" });
    } else {
      let match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.json({ message: "Invalid Credential" });
      } else {
        res.render("pages/auth/login", { title: "Login" });
      }
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.logoutController = (req, res, next) => {};

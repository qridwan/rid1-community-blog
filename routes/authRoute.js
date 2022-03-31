const router = require("express").Router();

const {
  signupPostController,
  signupGetController,
  loginPostController,
  loginGetController,
  logoutController,
} = require("../controllers/authControl");

router.get("/signup", signupGetController);
router.post("/signup", signupPostController);
router.get("/login", loginGetController);
router.post("/login", loginPostController);
router.get("/logout", logoutController);

module.exports = router;

const {
  SignUpUser,
  FetchUser,
  Login,
  SignUpUserUpdate,
  SignUpUserDelete,
  getUser,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/signup", SignUpUser);
router.get("/", FetchUser);
router.put("/userinfo/:userId", SignUpUserUpdate);
router.delete("/userinfo/:userId", SignUpUserDelete);
router.post("/login", Login);
router.get("/user", getUser);
module.exports = router;

const {
  SignUpUser,
  FetchUser,
  Login,
  SignUpUserUpdate,
  SignUpUserDelete,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/signup", SignUpUser);
router.get("/", FetchUser);
router.put("/userinfo/:userId", SignUpUserUpdate);
router.delete("/userinfo/:userId", SignUpUserDelete);
router.post("/login", Login);

module.exports = router;

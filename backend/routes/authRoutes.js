const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/auth");
const { body } = require("express-validator");

router.post("/login", login);
router.get("/profile", auth, controller);
router.post("/services", auth, role("admin"), controller);
router.post("/register",[
    body("email").isEmail(),
    body("password").isLength({ min: 6}),
],register);

module.exports = router;

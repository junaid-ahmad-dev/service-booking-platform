const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, controller);
router.post("/services", auth, role("admin"), controller);

module.exports = router;

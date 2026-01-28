const express = require("express");
const router = express.Router();

const {
    getAllServices,
    getSingleService,
    createService
} = require("../controllers/serviceController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, createService);
router.get("/", getAllServices);
router.get("/:id", getSingleService);

module.exports = router;
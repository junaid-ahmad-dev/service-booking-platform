const express = requre('express');
const router = express.Router();

const {
    createBooking,
    getUserBookings
} = require('../controllers/bookingControllers');

const auth = require("../middleware/authMiddleware");

router.post('/', auth, createBooking);
router.get('/my', auth, getUserBookings);

module.exports = router;
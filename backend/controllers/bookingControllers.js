const Booking = require("../models/Booking");
const booking = require("../models/Booking");

exports.createBooking = async(req,res) => {
    const { serviceId , date } = req.body;

    const booking = await Booking.create({
        user: req.user._id,
        service: serviceId,
        date
    });

    res.status(201).json(booking);
}

exports.getUserBookings = async(req,res) => {
    const boookings = await Booking.find({ user: req.user._id})
    .populate("service");

    res.json(bookings);
}

import { useEffect , useState } from "react";
import api from "../services/api";

const Mybookings = () => {
    const [ bookings, setBookings ] = useState([]);

    useEffect(() => {
        const fetchBookings = async() => {
            const res = await api.get("/booking/my");
            setBookings(res.data);
        }
        fetchBookings();
    },[]);

    return( 
        <div>
            <h2>My Bookings</h2>
            {bookings.map((booking) => {
                <div key={booking._id}>
                   <h3>{booking.service.title}</h3>
                   <p>{booking.service.description}</p>
                   <p>Status: {booking.status}</p>
                   <p>Date: {booking.date}</p>
                </div>
            })}
        </div>
    )
}

export default Mybookings;
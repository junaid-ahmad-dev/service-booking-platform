import { browserRouter , Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Services from "./pages/Services";
import Mybookings from "./pages/Mybookings";

const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={ <ProtectedRoute> <h1>Dashboard</h1> </ProtectedRoute>} />
            <Route path="/services" element={ <ProtectedRoute> <Services/> </ProtectedRoute> } />
            <Route path="/my-bookings" element={ <ProtectedRoute> <Mybookings/> </ProtectedRoute> } />
        </Routes>
        </BrowserRouter>
    );
};

export default App;
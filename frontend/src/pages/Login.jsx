import {useState, useContext} from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
         
const Login = () => {    

    const { setUser } = useContext(AuthContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await api.post("/auth/login", {
            email,
            password
        });

        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
    };

    return (

        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>

    )
};

export default Login;
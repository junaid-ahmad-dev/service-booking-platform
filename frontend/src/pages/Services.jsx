import { useEffect, useState } from "react";
import api from "../services/api";

const Services = () => {
    const [ services, setServices ] = useState([]);

    useEffect(() => {
        const fetchServices = async() => {
            const res = await api.get('/services');
            setServices(res.data);
        };
        fetchServices();
    },[]);

    return (
        <div>
            <h2>Services</h2>
            {services.map((service) => {
                <div key={service._id} >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p>{service.price}</p>
                </div>
            })}
        </div>
    );
};

export default Services;
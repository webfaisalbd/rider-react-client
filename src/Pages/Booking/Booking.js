import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (


        <div>
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p>{service.description}</p>

        </div>
    );
};

export default Booking;
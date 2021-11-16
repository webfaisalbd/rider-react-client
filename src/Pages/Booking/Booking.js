import { Grid,Box } from '@mui/material';
import axios from 'axios';
import './Booking.css'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';


import useAuth from '../../hooks/useAuth';



const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth();
    


    useEffect(() => {
        fetch(`https://intense-woodland-83356.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);


        const status = "Pending";
        const bookingItem = { ...data, status };


        axios.post('https://intense-woodland-83356.herokuapp.com/buyer', bookingItem)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

        }


    return (

        <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2} columns={ {xs: 4, sm: 8, md: 12}}>
          <Grid item  xs={4} sm={4} md={4}>
          <div>
            <img style={{width:"50%"}} src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p>{service.description}</p>

        </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} sx={{ ml:5 }}>
            
                <div className="add-booking" >
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 150 })} defaultValue={user.displayName} />
                <input {...register("email", { required: true, maxLength: 150 })} defaultValue={user.email} />
                {/* dynamic name  */}
                <input {...register("productName", { required: true, maxLength: 150 })} defaultValue={service?.name} />
                <input {...register("price", { required: true, maxLength: 150 })} defaultValue={service?.price} />
                
                <textarea {...register("address", { required: true, maxLength: 150 })} placeholder="Address" />
                <input type="date" {...register("date", { required: true, maxLength: 150 })} placeholder="order date" />
                <input type="number" {...register("contactNumber", { required: true, maxLength: 150 })} placeholder="contact-number" />
                
                
                <input type="submit"  className="btn btn-regular bg-success"/>
            </form>
                </div>


          </Grid>
        </Grid>
      </Box>
    );
};

export default Booking;
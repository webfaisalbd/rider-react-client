import { Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import "./Review.css"


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://intense-woodland-83356.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('We find your feedback successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-review">
            <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
            Give your feedback
                    </Typography>
                    <p style={{paddingBottom:'15px'}}>Your feedback is valuable for our development </p>
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} defaultValue={user.displayName} />
                <input {...register("email", { required: true, maxLength: 150 })} defaultValue={user.email} />
                <textarea {...register("description", { required: true})} placeholder="Your feedback" />
                <select {...register("rating", { required: true})}>
                     <option value="">Rating: from 1 to 5</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                </select>
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;
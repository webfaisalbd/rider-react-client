import { Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://intense-woodland-83356.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
            Add Product
                    </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
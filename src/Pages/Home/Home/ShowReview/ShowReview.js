import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography } from '@mui/material';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
        <Card sx={{ display: 'flex', boxShadow: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography component="div" variant="h6">
            {email}
          </Typography>
          <Typography component="div" variant="h6">
            Rating: {rating} <i class="fas fa-star"></i>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://thumbs.dreamstime.com/z/person-leaves-good-online-review-product-service-vector-illustration-design-graphics-site-section-reviews-us-190352662.jpg"
      />
    </Card>
    );
};

export default ShowReview;
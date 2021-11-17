import React from 'react';
import './ShowReview.css'
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography, CardActionArea } from '@mui/material';
import Rating from 'react-rating';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
      <Card  className="ratingCard"  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/P5gzypq/review.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {email}
          </Typography>
          <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly></Rating>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
};

export default ShowReview;
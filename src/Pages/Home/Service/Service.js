import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <Card sx={{  boxShadow: 2 }}>
      <img style={{height:"250px"}} src={img} />
      <Box   sx={{ bgcolor: 'text.disabled',color: 'primary.main' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ color: "white" , p:1 }}>
          {price} BDT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/booking/${_id}`}>
             <Button size="small">Buy Now</Button>
        </Link>
        
        
      </CardActions>
      </Box>
    </Card>
    );
};

export default Service;
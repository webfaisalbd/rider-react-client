import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography } from '@mui/material';

const AllService = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={img}
      />
      <Box  sx={{ bgcolor: 'text.disabled',color: 'primary.main' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary"  sx={{ color: "white" , p:1 }}>
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

export default AllService;
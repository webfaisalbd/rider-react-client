import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box, Tooltip } from '@mui/material';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
      <Card sx={{  boxShadow: 2 }}>
      <img style={{height:"250px"}} src={img} />
      <Box>
      <Typography className="ratingCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ color: "white" , p:1 }}>
          {price} BDT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0,60)}.....
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/booking/${_id}`}  style={{textDecoration:"none"}}>
             <Tooltip  title="Click" placement="top">
             <Button variant="contained"  size="small">Buy Now</Button>
             </Tooltip>
        </Link>
        
        
      </CardActions>
      </Typography>
      </Box>
    </Card>
    );
};

export default Service;
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Pay = () => {
    return (
<Container>
<div>
     
     <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
     All Payments gateway is comming soon
                    </Typography>
     <Box sx={{ width: '100%',pt:5 }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
         
          <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'pink', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          Bkash
        </Typography>

        </Grid>
        <Grid item xs={4}>
        <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'indigo', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          Rocket
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'blueviolet', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          My Cash
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'skyblue', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          Stripe
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'lightslategrey', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          Visa
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h6" color="text.secondary" sx={{ bgcolor:'lightskyblue', color: "black" ,boxShadow: 2, p:5 ,borderRadius: 1}}>
          Paypal
        </Typography>
        </Grid>
        
      </Grid>
    </Box>
        </div>
</Container>
    );
};

export default Pay;
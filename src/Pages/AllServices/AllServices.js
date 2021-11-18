import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Footer from '../Home/Home/Footer/Footer';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-woodland-83356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
                        Our All Products 
                    </Typography>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            services.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <AllService key={service._id}
                        service={service}></AllService>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
      <Footer></Footer>
    </Box>
    );
};

export default AllServices;
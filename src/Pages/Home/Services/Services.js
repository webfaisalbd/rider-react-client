import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Typed from 'react-typed';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-woodland-83356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
                         
                        <Typed
                    strings={['Our Latest Products']}
                    typeSpeed={150}
                />
                <br/>
                    </Typography>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            services.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <Service key={service.id}
                        service={service}></Service>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
    </Box>
    );
};

export default Services;
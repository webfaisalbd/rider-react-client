import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';
import Typed from 'react-typed';


const ShowReviews = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-woodland-83356.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, mt:10 }}>
            
                    <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , mb: 2 }}>
            
            <Typed
                    strings={['Customers Feedback']}
                    typeSpeed={250}
                />
                <br/> 
                    </Typography>
                    <Typography sx variant="p" component="div" sx={{ flexGrow: 1 }}>
            We are always welcome to our customer feedback 
                    </Typography>
      <Container>
      <Grid sx={{ flexGrow: 1 , mb: 3 , p:2 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:16}}>
        
        {
            services.map(service =>  <Grid item xs={4} sm={4} md={4} lg={4} >
                <ShowReview key={service._id}
                        service={service}></ShowReview>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
    </Box>
    );
};

export default ShowReviews;
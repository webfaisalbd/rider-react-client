import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container,CardActions, Tooltip,Typography,Button, Card, CardContent, Grid } from '@mui/material';
import Typed from 'react-typed';


const ManageAllProduct = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-woodland-83356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    const handleDelete= id => {

        const proceed = window.confirm('Are you Remove this bike? Confirm ?')
        if (proceed) {
            const url = `https://intense-woodland-83356.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Removed successfully')
                        const remainingUsers = services.filter(service => service._id !== id);
                        setServices(remainingUsers)

                    }
                })
        }


        
    }



    return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx variant="h4" component="div" sx={{ flexGrow: 1 , m: 3 }}>
                        
                           
            <Typed
strings={['Manage Products ']}
typeSpeed={150}
/>
<br/>
                    </Typography>
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            services.map(service =>  <Grid key={service._id} item xs={4} sm={4} md={4} >
                <Card sx={{  boxShadow: 2 }}>
                <img style={{height:"250px"}} src={service.img} />
                <Box>
      <Typography className="ratingCard">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ color: "white" , p:1 }}>
          {service.price} BDT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions>
      <div sx={{ justifyContent: 'space-between' }}>
       
        <Button variant="contained"  onClick={()=> handleDelete(service._id)}>Delete</Button>
       </div>
        
        
      </CardActions>
      </Typography>
      </Box>
    </Card>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
      
    </Box>
    );
};

export default ManageAllProduct;
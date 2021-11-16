import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {

    const [users, setUsers] = useState([])
    const {user} = useAuth();
    // console.log(user.email);

    useEffect(() => {
        fetch(`https://intense-woodland-83356.herokuapp.com/buyer`)
            .then(res => res.json())
            .then(data => {
                const value= data.filter(db=>db.email===user.email);
                setUsers(value);
            });       
    }, [users])


    const handleDelete= id => {

        const proceed = window.confirm('Are you sure,You want to delete?')
        if (proceed) {
            const url = `https://intense-woodland-83356.herokuapp.com/buyer/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers)

                    }
                })
        }


        
    }


    return (
        <div id="buyer">
            
            <h2>My Orders</h2>
            <div className="row">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            users.map(user =>  <Grid item xs={4} sm={4} md={4} >
                <Card sx={{  boxShadow: 2 }}>
      
      <Box  sx={{ bgcolor: 'text.disabled',color: 'primary.main' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="h6" color="text.secondary"  sx={{ color: "white" , p:1 }}>
          {user.email} BDT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product Name: {user.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {user.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {user.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order Date: {user.date}
        </Typography> 
        
       <div sx={{ justifyContent: 'space-between' }}>
       <Button  >{user.status}</Button>
        <Button variant="contained"  onClick={()=> handleDelete(user._id)}>Delete</Button>
       </div>
        
      </CardContent>
      
      </Box>
    </Card>
          </Grid>
             )
        }
      
    </Grid>
              
            </div>
            
  </div>
    );
};

export default MyOrder;
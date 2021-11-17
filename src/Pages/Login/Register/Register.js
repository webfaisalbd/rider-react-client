import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// import './Register.css';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("password doesn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)


        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>

            <Grid item xs={12} md={3}>
                    <div style={{marginTop:"200px"}}>
                    <img  src="https://i.ibb.co/GpjQtPR/signUp.gif" />
                    </div>
                    </Grid>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    
                    <Typography  sx={{ boxShadow: 3,borderRadius: 4 }}>
                        
                    <Typography  sx={{ pt: 2 }} variant="h4" gutterBottom>Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onChange={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 3 }}
                            type="submit"
                            variant="contained">Registration</Button>

                        

                    </form>}

                        </Typography>

                    {
                        isLoading && <CircularProgress color="secondary" />

                    }
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>


                <Grid item xs={12} md={3}>
                <div style={{marginTop:"200px"}}>
                <img width="50%"  src="https://i.ibb.co/Trfs0R9/login2.gif" />
                <NavLink style={{ textDecoration: "None" }} to="/Login">

                   <Button sx={{ width: '75%', m: 1 }}
                    type="submit"
                    variant="text">Already Registered ? Please Login</Button>
                </NavLink>
                    
                    </div>
                </Grid>

            </Grid>
        </Container >
    );
};

export default Register;
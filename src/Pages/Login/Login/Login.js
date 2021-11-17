import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <Container>
            <Grid container spacing={2}>

            <Grid item xs={12} md={3}>
                    <div style={{marginTop:"200px"}}>
                    <img style={{borderRadius:"25px", width: "200px"}}  src="https://i.ibb.co/vZFbCBB/login1.gif" />
                    </div>
                    </Grid>
                    
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography sx={{ boxShadow: 3, borderRadius: 4 }}>
                    <Typography sx={{ pt: 2 }}  variant="h4" gutterBottom>Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 3 }}
                            type="submit"
                            variant="contained">Login</Button>

                        

                    </form>}
                    </Typography>
                    <br />
                    <br />
                    
                    {
                        isLoading && <CircularProgress color="secondary" />

                    }
                    {user?.email && <Alert severity="success">User login successfully!</Alert>}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={3}>
                    <div style={{marginTop:"130px"}}>
                    <img  src="https://i.ibb.co/GpjQtPR/signUp.gif" />
                    <NavLink style={{ textDecoration: "None" }} to="/Register">

                            <Button sx={{ width: '75%', m: 1 }}
                                type="submit"
                                variant="text">New User ? Please Registration</Button>
                        </NavLink>
                    </div>
                    </Grid>

            </Grid>
        </Container >
    );
};

export default Login;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

const Navigation = () => {
    const theme = useTheme()
    const { user, logOut } = useAuth();


    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'

            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'

            }
        },
        navLogo: {
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            }
        }
    })
    const { navIcon, navItemContainer, navLogo } = useStyle()

    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>

                <ListItem button>
                    <ListItemText>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">Home</Link>
                    </ListItemText >

                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/AllServices">AllProducts</Link>
                    </ListItemText >
                </ListItem>

                <Divider />
                <ListItem button>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">Dashboard</Link>
                </ListItem>
                <Divider />
                <ListItemText>
                    {

                        user?.email ? <>

                            <ListItem button>
                            <Button className={navItemContainer}>
                                {user?.displayName || 'no user'}
                            </Button>
                            </ListItem>
                            <Divider />

                            
                            <ListItem button>
                                 <Link to="/login" onClick={logOut} style={{ textDecoration: 'none', color: 'black' }} >LogOut</Link>
                            </ListItem>
                            <Divider />

                            
                        </> :
                            <>

                                <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink> </>
                    }
                </ListItemText >
                <Divider />

            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "black" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                           Riders
                        </Typography>


                        <>


                            <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/AllServices">
                                <Button color="inherit">AllProducts</Button>
                            </NavLink>
                            <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/contact">
                                <Button color="inherit">Contact</Button>
                            </NavLink>


                            {

                                user?.email ? <>


                                    <Typography className={navItemContainer}>
                                        {user?.displayName || 'no user'}
                                    </Typography>
                                    <Button className={navItemContainer} onClick={logOut} color="inherit">LogOut</Button>
                                </> :
                                    <>

                                        <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                            <Button color="inherit">Login</Button>
                                        </NavLink> </>
                            }


                        </>
                    </Toolbar>
                </AppBar>
            </Box>


            <div>

                <React.Fragment>

                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;
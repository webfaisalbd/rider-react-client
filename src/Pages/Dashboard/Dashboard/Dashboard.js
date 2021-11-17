import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AddService from '../../AddService/AddService';
import Review from '../Review/Review';
import MyOrder from '../../MyOrder/MyOrder';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';
import Pay from '../Pay/Pay';
import ManageAllProduct from '../../ManageAllProduct/ManageAllProduct';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin , logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            
            <Toolbar />
            <Divider />
            
            
             
              {
                  !admin && <Box>
                <Link to="/home" ><Button>Home</Button></Link>
                         <Divider />
                         <Link to={`${url}/review`}><Button color="inherit">Provide Review</Button></Link>
                         <Link to={`${url}/myOrder`}><Button color="inherit">My Order</Button></Link>
                         <Divider />
                         <Link to={`${url}/pay`}><Button color="inherit">My pay</Button></Link>
                         <Divider />
                         
                         <Divider />
                         <Button onClick={logOut} color="inherit">LogOut</Button>
                </Box>
              }
            




             {
                 admin && <Box>
                <Link to="/home" ><Button>Home</Button></Link>
                <Divider />
                 <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                 <Link to={`${url}/addService`}><Button color="inherit">Add a Product</Button></Link>
                 <Link to={`${url}/manageAllOrder`}><Button color="inherit">Manage All Order</Button></Link>
                 <Link to={`${url}/ManageAllProduct`}><Button color="inherit">Manage Products</Button></Link>
                 <Divider />
                <Button onClick={logOut} color="inherit">LogOut</Button>
                 
                
             </Box>
             }
             
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{backgroundColor: "black",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
                
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <Route path={`${path}/ManageAllProduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
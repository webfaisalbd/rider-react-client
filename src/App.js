import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import AllServices from "./Pages/AllServices/AllServices";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Navigation from "./Pages/Home/Shared/Navigation/Navigation";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/AllServices">
              <AllServices></AllServices>
            </PrivateRoute>
            <PrivateRoute path="/Services">
              <Services />
            </PrivateRoute>
            <Route path="/AddService">
              <AddService />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>




        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

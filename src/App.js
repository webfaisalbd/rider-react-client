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
import Pay from "./Pages/Dashboard/Pay/Pay";
import Review from "./Pages/Dashboard/Review/Review";
import Footer from "./Pages/Home/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Sliding from "./Pages/Home/Home/Sliding/Sliding";
import Services from "./Pages/Home/Services/Services";
import Navigation from "./Pages/Home/Shared/Navigation/Navigation";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import NotFound from "./Pages/NotFound/NotFound";
import { render } from "react-dom";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import ManageAllProduct from "./Pages/ManageAllProduct/ManageAllProduct";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>

          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/sliding">
              <Sliding />
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
            <Route path="/AllServices">
              <AllServices></AllServices>
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <AdminRoute path="/AddService">
              <AddService />
            </AdminRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder />
            </PrivateRoute>
            <AdminRoute path="/manageAllOrder">
              <ManageAllOrder />
            </AdminRoute>

            <AdminRoute path="/ManageAllProduct">
              <ManageAllProduct></ManageAllProduct>
            </AdminRoute>

            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin />
            </AdminRoute>
            <Route path="/pay">
              <Pay />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
            

          </Switch>
    



        </Router>
      </AuthProvider>
    </div>
  );
}
render(<App />, document.getElementById("root"));
export default App;

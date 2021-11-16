import { Card, Grid, Box, CardContent, Typography, Button, Table } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {

    const [users, setUsers] = useState([])
    const [approved, setApproved] = useState(false);
    
    // console.log(user.email);

    useEffect(() => {
        fetch(`https://intense-woodland-83356.herokuapp.com/buyer`)
            .then(res => res.json())
            .then(data => {
                
                setUsers(data);
                console.log(users);
            });       
    }, [approved])


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


    // update the status pending to approved
  const handleApproved = (order) => {
    const newOrder = { ...order };
    console.log(order)

    newOrder.status = "Shipped";
    delete newOrder._id;
    const url = `https://intense-woodland-83356.herokuapp.com/buyer/${order._id}`;
    fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.acknowledged) {
                alert("Update Successfully");
                setApproved(!approved);
            }
        });
};


    return (
        <div id="users">
            
            <h2  className="mt-2 text-info">Manage All Orders</h2>
            <div className="row">
            
            <Table striped bordered hover>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          users.map(user =>
                              <tr>
                                  <td>{user.name}</td>
                                  <td>{user.address}</td>
                                  <td>{user.email}</td>
                                  <td>{user.date}</td>
                                  <td>{user.status}</td>
                                  <td> <Button onClick={() => handleApproved(user)} className="btn btn-regular">✔️</Button> <Button onClick={() => handleDelete(user._id)} className="btn btn-regular">❌</Button> </td>
                              </tr>
                          )
                      }


                  </tbody>
              </Table>
              
            </div>
  </div>
    );
};

export default ManageAllOrder;
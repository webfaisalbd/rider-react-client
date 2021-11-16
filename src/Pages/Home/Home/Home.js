import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Form from './Form/Form';
import ShowReviews from './ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Form></Form>
            


        </div>
    );
};

export default Home;
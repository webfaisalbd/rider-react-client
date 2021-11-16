import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Form from './Form/Form';
import ShowReviews from './ShowReviews/ShowReviews';
import Sliding from './Sliding/Sliding';

const Home = () => {
    return (
        <div>
            <Sliding></Sliding>
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Form></Form>
            


        </div>
    );
};

export default Home;
import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
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
            <Footer></Footer>
            


        </div>
    );
};

export default Home;
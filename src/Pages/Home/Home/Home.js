import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import ShowReviews from './ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;
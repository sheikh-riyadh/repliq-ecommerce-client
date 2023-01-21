import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Offer from '../../Components/Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
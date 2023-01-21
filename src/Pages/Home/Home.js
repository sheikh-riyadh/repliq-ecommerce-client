import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Countdown from '../../Components/Countdown/Countdown';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Offer from '../../Components/Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Countdown></Countdown>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Countdown from '../../Components/Countdown/Countdown';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Offer from '../../Components/Offer/Offer';
import Products from '../../Components/Products/Products';
import Team from '../../Components/Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Offer></Offer>
            <Countdown></Countdown>
            <Team></Team>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
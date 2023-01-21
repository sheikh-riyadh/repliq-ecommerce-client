import React from 'react';
import offer1 from '../../Assets/discount-img.jpg'
import offer2 from '../../Assets/new-categories.jpg'
import offer3 from '../../Assets/price-from-12-image.jpg'

const Offer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-10 my-20 mx-5 lg:mx-20'>
            <img src={offer1} className='hover:scale-105 transition' alt="offer" />
            <img src={offer2} className='hover:scale-105 transition' alt="offer" />
            <img src={offer3} className='hover:scale-105 transition' alt="offer" />
        </div>
    );
};

export default Offer;
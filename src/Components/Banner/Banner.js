import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/XVJ4HRJ/banner-1.jpg")` }}>
                <div className='hero-overlay bg-opacity-5'></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-screen-xl">
                        <h1 className="mb-5 text-3xl">Flower & Gift</h1>
                        <h2 className="mb-5 text-xl md:text-5xl lg:text-7xl font-semibold">Perfect Bunch <br></br> For Every Occasion</h2>
                        <button className="btn btn-secondary px-10 rounded-full mt-10">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
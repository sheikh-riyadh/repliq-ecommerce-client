import React from 'react';
import countdownBanner from '../../Assets/countdown-banner.jpg'

const Countdown = () => {


    return (
        <div className='bg-[#f8f8f8]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-5 lg:mx-20 py-20 my-20'>
                <div>
                    <p className='text-secondary'>Shop Your Flower Best Offer- $12</p>
                    <h2 className='text-2xl md:lg:text-5xl font-medium mb-10' >Shop Your Flower Best Offer- $12</h2>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-secondary font-bold rounded-box text-white">
                            <span className="countdown font-mono lg:text-5xl">
                                <span id='day' style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-secondary font-bold rounded-box text-white">
                            <span className="countdown font-mono lg:text-5xl">
                                <span id='hour' style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-secondary font-bold rounded-box text-white">
                            <span className="countdown font-mono lg:text-5xl">
                                <span id='minute' style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-secondary font-bold rounded-box text-white">
                            <span className="countdown font-mono lg:text-5xl">
                                <span id='second' style={{ "--value": 50 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <button className="btn btn-secondary px-10 rounded-full mt-7 lg:mt-10 text-white">Shop Now</button>
                </div>
                <div className='hidden md:block lg:block'>
                    <img src={countdownBanner} className="w-full" alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Countdown;
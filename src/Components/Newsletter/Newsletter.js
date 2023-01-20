import React from 'react';

const Newsletter = () => {
    return (
        <div className="py-10 bg-newsletter bg-cover">
            <div className='hero-overlay bg-opacity-5'></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-white">
                    <h2 className="mb-2 md:mb-3 lg:mb-5 text-2xl md:text-5xl font-medium">Get The Latest Deals</h2>
                    <p className="mb-5 text-xl">$30 coupon for first shopping</p>
                    <div className='flex'>
                        <div className='w-5/6'>
                            <input type="email" placeholder="email" className="input rounded-tl-full rounded-bl-full text-primary w-full p-2" />
                        </div>
                        <button className="btn btn-secondary rounded-tr-full rounded-br-full text-white">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
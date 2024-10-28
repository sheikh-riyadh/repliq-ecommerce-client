import React from "react";
import banner from "../../Assets/banner-1.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hero h-96 md:h-[450px] lg:h-[600px] xl:min-h-screen w-full z-10 relative">
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen-xl text-white">
            <h1 className="mb-2 md:mb-3 lg:mb-5 text-2xl md:text-3xl">
              Flower & Gift
            </h1>
            <h2 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-semibold">
              Perfect Bunch <br></br> For Every Occasion
            </h2>
            <button className="btn btn-secondary px-10 rounded-full  md:mt-7 lg:mt-10">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-0">
        <img className="h-96 md:h-[450px] lg:h-[600px] xl:min-h-screen w-full" src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;

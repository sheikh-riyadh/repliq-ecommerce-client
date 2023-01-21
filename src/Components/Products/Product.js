import React from 'react';
import { FaStar } from 'react-icons/fa';
import './product.css'

const Product = ({ product, setProduct }) => {
    const { productName, productImage, price } = product
    return (
        <div>
            <div className="w-full">
                <div className='relative productImage'>
                    <img className="rounded-t-lg" src={productImage} alt="product_image" />
                    <div className='productInfo hidden animate__animated animate__fadeInUp'>
                        <div className='absolute bottom-0 right-0 bg-black w-full grid grid-cols-2 opacity-80'>
                            <span className="text-white focus:ring-4 focus:outline-none hover:bg-secondary focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center cursor-pointer">Buy</span>
                            <label onClick={() => setProduct(product)} htmlFor="productModal" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center cursor-pointer border-l hover:bg-secondary">Details</label>
                        </div>

                    </div>
                    {
                        product?.badge ? <>
                            <div className="badge absolute badge-secondary rounded-none top-3 left-0 font-bold text-white">New</div>
                        </>
                            :
                            <>
                                <div className="badge absolute badge-success rounded-none top-3 left-0 font-bold text-white">{`${product?.discount}% off`}</div>
                            </>
                    }
                </div>
                <div className="px-5 pb-5">
                    <span>
                        <h5 className="text-sm md:text-base font-semibold text-primary">{productName}</h5>
                    </span>
                    <div className="flex items-center mt-2.5 mb-5 text-secondary">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm md:text-base font-bold text-primary">Price: ${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
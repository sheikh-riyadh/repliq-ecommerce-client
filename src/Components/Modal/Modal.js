import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Modal = ({ product }) => {
    const { setAddProductCount, user, loading } = useContext(AuthContext)
    let count = 0

    /* Handling buying product here */
    const handleBuy = () => {
        count++
        if (loading) {
            return <Spinner></Spinner>
        }
        else if (!user?.uid) {
            toast.error("Please login first to buy this product")
        } else {
            const { productName, price, productImage, quantity } = product
            const addedProduct = {
                productName,
                price,
                productImage,
                quantity,
                buyerEmail: user?.email
            }
            addToCart(addedProduct)
        }
    }


    /* Add purchase product to database here */
    const addToCart = async (addedProduct) => {
        const res = await fetch(`${process.env.REACT_APP_api_url}/add-to-cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedProduct)
        });
        const data = await res.json()
        if (data?.acknowledged) {
            toast.success("Add product successfull")
            setAddProductCount(count)
        }
    }
    return (
        <div>
            <input type="checkbox" id="productModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-8/12 max-w-3xl relative">
                    <label htmlFor="productModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <img className='lg:w-10/12' src={product?.productImage} alt="product" />
                        </div>
                        <div className='font-bold'>
                            <h3 className="text-lg">{product?.productName}</h3>
                            <p className="py-4 text-justify font-normal">{product?.description}</p>
                            <p>Size: {product?.size}</p>
                            <div className='flex gap-3'>
                                <p>Color:</p>
                                <div className="badge badge-lg bg-black"></div>
                                <div className="badge badge-lg bg-red-400"></div>
                                <div className="badge badge-lg bg-red-600"></div>
                                <div className="badge badge-lg bg-green-600"></div>
                                <div className="badge badge-lg bg-yellow-500"></div>
                            </div>
                            <label htmlFor="productModal" onClick={handleBuy} className="btn btn-secondary my-5 w-full text-white">Add to cart</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
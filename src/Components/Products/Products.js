import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Product from './Product';

const Products = () => {
    const [product, setProduct] = useState(null)
    const { setAddProductCount } = useContext(AuthContext)
    let count = 0

    /* Get all product from database */
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}`);
            const data = await res.json()
            return data
        }
    })

    /* User context */
    const { user, loading } = useContext(AuthContext)

    /* Handling buying product here */
    const handleBuy = (product) => {
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
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='mx-5 md:mx-10 lg:mx-20 my-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    products?.map(product => <Product
                        product={product}
                        key={product?._id}
                        setProduct={setProduct}
                        handleBuy={handleBuy}
                    ></Product>)
                }
            </div>
            <Modal
                product={product}
            ></Modal>
        </div>
    );
};

export default Products;
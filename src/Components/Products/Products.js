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
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}`);
            const data = await res.json()
            return data
        }
    })

    const { user, loading } = useContext(AuthContext)

    const handleBuy = (product) => {
        console.log(product)
        if (loading) {
            return <Spinner></Spinner>
        }
        else if (!user?.uid) {
            toast.error("Please login first to buy this product")
        } else {
            toast.success("added product")
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
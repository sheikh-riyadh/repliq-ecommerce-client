import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../Spinner/Spinner';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}`);
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-5 md:mx-10 lg:mx-20 my-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
            {
                products?.map(product => <Product
                    product={product}
                    key={product?._id}
                ></Product>)
            }
        </div>
    );
};

export default Products;
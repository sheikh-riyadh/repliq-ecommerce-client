import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';

const ViewCarts = () => {

    const { user } = useContext(AuthContext)
    const { data: cartProducts, isLoading } = useQuery({
        queryKey: ['add-to-cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/add-to-cart?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = (id) => {

    }

    return (
        <div className='mx-5 md:mx-10 lg:mx-20 my-20'>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full px-10">
                    <thead>
                        <tr className='text-center'>
                            <th className='text-start'>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center '>
                        {
                            cartProducts?.map((cart, i) => <tr
                                key={i}
                            >
                                <td><img className='w-16 h-16 rounded-full' src={cart.productImage} alt='car_image'></img></td>
                                <td>{cart.productName}</td>
                                <td>$ {cart.price}</td>
                                <td className='text-end'><button onClick={() => handleDelete(cart._id)} className='hover:text-gray-100 bg-gradient-to-r from-secondary to-red-700 text-white btn border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewCarts;
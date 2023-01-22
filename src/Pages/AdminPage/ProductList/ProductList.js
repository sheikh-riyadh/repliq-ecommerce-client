import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import empty from '../../../Assets/no-found.svg'

const ProductList = () => {


    const { data: prductsList, isLoading, refetch } = useQuery({
        queryKey: ['add-to-cart'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure you want to delete?")
        if (agree) {
            fetch(`${process.env.REACT_APP_api_url}/product/${id}`, {
                method: 'DELETE',
            }).then(res => res.json()).then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Deleted successfull")
                    refetch()
                }
            })
        }
    }

    return (
        <div className='mx-5 md:mx-10 lg:mx-20 my-20'>
            {
                prductsList.length > 0 ?
                    <div>
                        <h1 className='uppercase my-5 md:text-3xl lg:text-5xl font-bold'>Products List</h1>
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
                                        prductsList?.map((cart, i) => <tr
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
                    :
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='uppercase my-5 md:text-3xl lg:text-5xl font-bold'>Empty products list</h1>
                        <img className='lg:w-6/12 text-center' src={empty} alt="empty_product" />
                    </div>
            }

        </div>
    );
};

export default ProductList;
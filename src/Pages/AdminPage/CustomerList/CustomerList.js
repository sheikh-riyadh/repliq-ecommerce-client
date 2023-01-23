import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Spinner from '../../../Components/Spinner/Spinner';
import empty from '../../../Assets/no-found.svg'
import { FaUserCircle } from 'react-icons/fa';


const CustomerList = () => {


    const { data: allUsers, isLoading, refetch } = useQuery({
        queryKey: ['all-users'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_api_url}/all-users`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const customersList = allUsers.filter(user => user?.role !== 'admin')

    const handleDelete = (id) => {
        const agree = window.confirm("Are you sure you want to delete?")
        if (agree) {
            fetch(`${process.env.REACT_APP_api_url}/all-users/${id}`, {
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
                customersList?.length > 0 ?
                    <div>
                        <h1 className='uppercase my-5 md:text-3xl lg:text-5xl font-bold'>Customer List</h1>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full px-10">
                                <thead>
                                    <tr className='text-center'>
                                        <th className='text-start'>Customer</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th className='text-end'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center '>
                                    {
                                        customersList?.map((user, i) => <tr
                                            key={i}
                                        >
                                            <td><FaUserCircle className='text-5xl'></FaUserCircle></td>
                                            <td>{user.userName}</td>
                                            <td>{user.userEmail}</td>
                                            <td className='text-end'><button onClick={() => handleDelete(user._id)} className='hover:text-gray-100 bg-gradient-to-r from-secondary to-red-700 text-white btn border-0'>Delete</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='uppercase my-5 md:text-3xl lg:text-5xl font-bold'>Empty Customer list</h1>
                        <img className='lg:w-6/12 text-center' src={empty} alt="empty_product" />
                    </div>
            }

        </div>
    );
};

export default CustomerList;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    let totalPrice = 0;

    const { user, addProductCount } = useContext(AuthContext)
    const { data: cartProducts, refetch } = useQuery({
        queryKey: ['add-to-cart', user?.email],
        queryFn: async () => {
            const res = fetch(`${process.env.REACT_APP_api_url}/add-to-cart?email=${user?.email}`);
            const data = (await res).json()
            return data;
        }
    })
    if (addProductCount >= 0 || addProductCount === 0) {
        refetch()
    }

    cartProducts?.forEach(product => {
        return totalPrice += product?.price
    })

    const headerItems = () => {
        return <>
            <li className='mr2 lg:mr-5'><Link to='/home'>Home</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/login'>Login</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/register'>Register</Link></li>
            <li className='mr2 lg:mr-5'><Link to='/blogs'>Dashboad</Link></li>
        </>
    }

    return (
        <div className="shadow-md sticky top-0 bg-white z-50">
            <div className='lg:mx-20'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    headerItems()
                                }
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                headerItems()
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge bg-secondary text-white border-0 badge-sm indicator-item">{cartProducts?.length}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">Items {cartProducts?.length}</span>
                                    <span className="text-primary">Subtotal: $ {totalPrice}</span>
                                    <div className="card-actions">
                                        <Link to='/view-cart' className="btn btn-secondary text-white btn-block">View cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
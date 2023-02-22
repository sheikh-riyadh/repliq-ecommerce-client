import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/AuthProvider';

const Main = () => {

    const { user } = useContext(AuthContext)

    const { data: cartProducts, refetch } = useQuery({
        queryKey: ['add-to-cart', user?.email],
        queryFn: async () => {
            const res = fetch(`${process.env.REACT_APP_api_url}/add-to-cart?email=${user?.email}`);
            const data = (await res).json()
            return data;
        }
    })
    return (
        <div>
            <Header cartProducts={cartProducts} refetch={refetch}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
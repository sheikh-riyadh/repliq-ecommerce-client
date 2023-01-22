import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }
    else if (!user?.uid) {
        toast.error("Please login to see cart page")
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRouter;
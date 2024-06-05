import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../context/Authprovider';
import Loader from '../components/shared/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation()

    if (loader) {
        return <Loader></Loader>
    }

    if (user && user?.uid) {
        return children
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

};

export default PrivateRouter;
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user , loading} = use(AuthContext);
    console.log(user); 
    const location = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;
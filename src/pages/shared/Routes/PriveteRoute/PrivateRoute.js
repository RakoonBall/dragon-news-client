import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
/*
1. only allow authenticated user to visit the route
2. 
3. redirect user to the route they wanted to go before login
*/
const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="primary" />
    } 
    //if user is not there navigate to home
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;// returns it to the children if it is logged in
};

export default PrivateRoute;
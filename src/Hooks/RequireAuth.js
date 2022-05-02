import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebaseinit';
// import auth from '../../firebase.inti';

const RequreAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // if (loading) {
    //     return (
    //         <div className="d-flex justify-content-center">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }
    if (!user) {

        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate >
    }

    return children;
};

export default RequreAuth;



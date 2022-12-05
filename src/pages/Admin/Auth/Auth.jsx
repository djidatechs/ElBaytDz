import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Auth(props) {
    const fakeAuth = true ; 
    console.log({fakeAuth});
    if (fakeAuth === false) return <Navigate to={"/admin/signup"} /> //and clear cache
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Auth;
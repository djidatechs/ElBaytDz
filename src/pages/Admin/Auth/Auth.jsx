import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import fakeauth from '../../../FakeAuth/fakeauth';

function Auth(props) {
    console.log({fakeauth});
    if (fakeauth === false) return <Navigate to={"/admin/signup"} /> //and clear cache
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Auth;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import fakeauth from '../../../FakeAuth/fakeauth';
import { useElbayt } from '../../Auth/AuthContext';

function Auth(props) {
    const [user,setUser] = useElbayt()

    if (user.role != "admin") return <Navigate to={"/"} /> //and clear cache
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Auth;
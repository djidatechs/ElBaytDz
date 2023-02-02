import React, { createContext, useState, useEffect } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import fakeauth from '../../FakeAuth/fakeauth';
import { useElbayt } from './AuthContext';




function Auth(props) {
    const [user,setUser] = useElbayt();
    
    
    
    if (user.id == undefined) return <Navigate to={"/signup"} /> //and clear cache
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default Auth;
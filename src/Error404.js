import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function NoMatch(props) {
    const {pathname} = useLocation(); 
    
    //if the [PAGE NOT FOUND] Error happend in the Admin route => GOTO /admin/signup
    if (pathname.split("/")[1]==="admin")
        return <Navigate to={"/admin/signup"}/>


    //if the [PAGE NOT FOUND] Error happend in the Client route => GOTO /signup
    return <Navigate to={"/signup"}/>
}

export default NoMatch;
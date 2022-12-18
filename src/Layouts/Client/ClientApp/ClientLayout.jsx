import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ClientContainter from '../../Containers/ClientContainter';

function ClientLayout(props) {
    
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default ClientLayout;
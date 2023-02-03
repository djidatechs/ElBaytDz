import React from 'react';
import ClientContainter from '../../Containers/ClientContainter';

import NavbarAdmin from '../../../Components/Navbar/Admin/NavbarAdmin';
import BreadCrump from '../../../Components/Annonce/BreadCrump';
import { useElbayt } from '../../../pages/Auth/AuthContext';


function Navbar(props) {
    const {name} = useElbayt()[0]
    return (
        <>
        <ClientContainter LayoutBackground='untilMd:sticky untilMd:top-0 z-50 md:fixed w-full  bg-sky' Custumize=' ' >
            <NavbarAdmin/>
        </ClientContainter>
        <BreadCrump text={"Administration | Bienvenu "+name}/>  {/* Client contained */}
       
        </>
    );
}

export default Navbar;
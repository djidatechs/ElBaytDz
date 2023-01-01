import React from 'react';
import ClientContainter from '../../Containers/ClientContainter';

import NavbarAdmin from '../../../Components/Navbar/Admin/NavbarAdmin';
import BreadCrump from '../../../Components/Annonce/BreadCrump';


function Navbar(props) {
    return (
        <>
        <ClientContainter LayoutBackground='untilMd:sticky untilMd:top-0 z-50 md:fixed w-full  bg-sky' Custumize=' ' >
            <NavbarAdmin/>
        </ClientContainter>
        <BreadCrump text={"Bienvenu Djida Issam"}/>  {/* Client contained */}
       
        </>
    );
}

export default Navbar;
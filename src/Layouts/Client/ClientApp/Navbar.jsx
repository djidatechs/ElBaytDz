import React from 'react';
import ClientContainter from '../../Containers/ClientContainter';
import NavbarAuthed from '../../../Components/Navbar/NavbarAuthed';


function Navbar(props) {
    return (
        <>
        <ClientContainter LayoutBackground='untilMd:sticky untilMd:top-0 z-50 md:fixed w-full md:z-10 bg-sky' Custumize=' ' >
            <NavbarAuthed/>
        </ClientContainter>
        <ClientContainter LayoutBackground='hidden md:block fixed w-full z-50' Custumize=' ' >
            <NavbarAuthed/>
        </ClientContainter>
        </>
    );
}

export default Navbar;
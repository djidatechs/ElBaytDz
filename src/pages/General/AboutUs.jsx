import React , {useEffect} from 'react';

import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover2 from '../../Components/Shared/PresentationCover2';

function AboutUs(props) {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    return (
        <div className= ''>

            <ClientContainter LayoutBackground='z-10' CustumizeOverRide='w-full'>
                <PresentationCover2/>
            </ClientContainter>

            <ClientContainter LayoutBackground='z-0' Custumize='text-center text-xl font-semibold mt-5'>
            <div className='space-y-5 '>
                <h1 className='text-3xl text-bold'>Welcome to Elbayt Dz</h1>
                <p>Elbayt Dz is the real estate selling/renting website created by a talented team of students from ESI ALGER.</p>
                <p>We are proud to present our website, designed to help you find the property of your dreams in Algeria.</p>
                <p>Our team consists of Djida Issam, Boudjella Younes, Moussaoui Moncef, and Belmellat Yasmine, all passionate about real estate.</p>
                <p>We have worked hard to create a user-friendly website with a friendly interface and a selection of top-quality properties.</p>
                <p>Whether you're looking to buy or rent, Elbayt Dz is the ideal choice for finding the property that meets your needs.</p>
                <p>We have a wide selection of houses, apartments, lands, and other properties available for sale or rent.</p>
                <p>Our listings are updated regularly to ensure you have access to the latest properties on the market.</p>
                <p>We're here to help you every step of the way, from searching to signing the sale or rental agreement.</p>
                <p>Visit our website to discover our offerings and find your ideal property.</p>
                <p>Thank you for your trust, and we hope to help you find the property of your dreams with Elbayt Dz.</p>
            </div>
            </ClientContainter>

           
            

           
        </div>
    );
}

export default AboutUs;
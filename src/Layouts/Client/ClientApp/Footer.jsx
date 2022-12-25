import React from 'react';
import ClientContainter from '../../Containers/ClientContainter';
import LogoFooter from '../../../Assets/LogoFooter.svg'
import GoUpIcon from '../../../Assets/GoUpIcon.svg'
import { Link } from 'react-router-dom';
import ContactFooter from '../../../Components/Shared/ContactFooter';

function Footer(props) {
    return (
        <>
        <ClientContainter LayoutBackground='z-0' Custumize='py-6 text-center'>
            <ContactFooter/>
            </ClientContainter>
        <ClientContainter LayoutBackground='bg-[#104A7A]' Custumize='' >

            <footer className='pt-10 pb-28 relative  '>
                <div className='md:grid grid-cols-3 md:items-center untilMd:text-center untilMd:space-y-10'>
                    <img src={LogoFooter} alt='footer logo' className='untilMd:mx-auto'/>
                    <button className=' bg-white text-night font-extrabold rounded-xl p-2 text-lg w-52 lg:w-64 h-12'>
                        Publier une annonce</button>
                    <div className='text-white mx-auto grid grid-cols-1 font-extrabold text-lg space-y-5'>
                        <Link>Qui somme nous ?</Link>
                        <Link>Contactez nous </Link>
                        <Link>Conditions d'utilisation</Link>
                    </div>
                </div>
                <img onClick={()=>{window.scrollTo({top:0 , behavior: 'smooth'})}} src={GoUpIcon} className='text-white cursor-pointer absolute  right-2 bottom-8'/>
            </footer>
        </ClientContainter>
        <ClientContainter LayoutBackground='bg-night' >
            <footer className='text-center font-bold text-white text-lg p-4'>
                © 2023 ELBAYT DZ. Tous droits réservés.  Le site immobilier de l'Algérie
            </footer>
        </ClientContainter>
        </>
    );
}

export default Footer;
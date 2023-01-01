import React from 'react';
import ClientContainter from '../../Containers/ClientContainter';
import LogoFooter from '../../../Assets/LogoFooter.svg'
import GoUpIcon from '../../../Assets/GoUpIcon.svg'
import { Link, useNavigate } from 'react-router-dom';
import ContactFooter from '../../../Components/Shared/ContactFooter';

function Footer(props) {
    const nav = useNavigate()
    return (
        <>
        <ClientContainter LayoutBackground='bg-night' >
            <footer className='text-center font-bold text-white text-lg p-4'>
                © 2023 ELBAYT DZ. Tous droits réservés.  Le site immobilier de l'Algérie
            </footer>
        </ClientContainter>
        </>
    );
}

export default Footer;
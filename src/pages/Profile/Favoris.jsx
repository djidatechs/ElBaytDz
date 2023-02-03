import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import AnnoncesSpace from '../../Components/Spaces/AnnonceSpace/AnnoncesSpace';
import FavIcon2 from '../../Assets/FavIcon2.svg'
import { useNavigate } from 'react-router-dom';
import Listmessages from './Listmessages';

function Favoris(props) {
    const nav = useNavigate();
    
    return (
        <ClientContainter LayoutBackground='bg-gray-100' Custumize=''>
            <div className='w-full my-10 space-y-5 lg:flex'>
            <div className='text-center mx-auto lg:text-left w-full lg:flex  lg:w-1/2'>
                <img src={FavIcon2} alt="" className='lg:mr-5 untilLg:mx-auto' />
                <h1 className='  text-night font-bold text-xl lg:text-2xl'>Liste des messages de mes annonces</h1>
            </div>
                
            <div className='text-right w-full lg:w-1/2'>
            <button onClick={()=>nav("/annonces/new")} className=' bg-sky text-white font-extrabold rounded-xl p-2 text-lg w-full lg:w-64 h-12'>Publier une annonce</button>
            </div>
            </div>
            <Listmessages/>
            
        </ClientContainter>
    );
}

export default Favoris;
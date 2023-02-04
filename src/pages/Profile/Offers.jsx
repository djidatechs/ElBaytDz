import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import AnnoncesSpace from '../../Components/Spaces/AnnonceSpace/AnnoncesSpace';
import FavIcon2 from '../../Assets/FavIcon2.svg'
import { useNavigate } from 'react-router-dom';
import { useElbayt } from '../Auth/AuthContext';

function Offers(props) {
    const nav = useNavigate();
    const [user,setUser] = useElbayt()

    return (
        <ClientContainter LayoutBackground='bg-gray-100' Custumize=''>
            <div className='w-full my-10 space-y-6 lg:flex'>
            <div className='text-center lg:text-left w-full lg:w-1/2'>
                
                <h1 className='  text-night font-bold text-xl lg:text-2xl'>Mes annonces que j'ai déposé</h1>
                </div>
                
                <div className='text-right w-full lg:w-1/2'>
                <button onClick={()=>nav("/annonces/new")} className=' bg-sky text-white font-extrabold rounded-xl p-2 text-lg w-full lg:w-64 h-12'>Publier une annonce</button>
                </div>
            </div>
            <AnnoncesSpace remove  DefaultFetch={`https://elbayt-backend.onrender.com/myrealestates?email=${user.email}`}/>
            
        </ClientContainter>
    );
}

export default Offers;
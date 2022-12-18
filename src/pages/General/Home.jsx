import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover from '../../Components/Shared/PresentationCover1';
import DecouvrireIcon from '../../Assets/DecouvrireIcon.svg'


import AnnoncesSpace from '../../Components/Spaces/AnnonceSpace/AnnoncesSpace';
import Inputer from '../../Components/Shared/Inputer';
import ContactFooter from '../../Components/Shared/ContactFooter';

function Home(props) {
    return (
        <div className= ''>
            
            {/* PresentationCovers should be used inside a ClientContainer without other children 
            Also the z-index must be 10 , not 0 */}
            <ClientContainter LayoutBackground='z-10' CustumizeOverRide='w-full'>
                <PresentationCover/>
            </ClientContainter>

            <ClientContainter LayoutBackground='z-0' Custumize=''>
            <div className='my-6  space-y-2  text-center text-night font-bold'>
                <div className='space-x-5'>
                    <img src={DecouvrireIcon} alt="" className='w-10 md:w-14 h-10 md:h-14 inline' />
                    <h1 className='text-xl md:text-3xl inline'>Qu'allez-vous découvrir ?</h1>
                </div>
                <h2 className='text-lg md:text-2xl'>Meilleur Agent de vente Immobilier en Algérie</h2>
            </div>
            </ClientContainter>

            <ClientContainter LayoutBackground='z-0 bg-[#D9D9D9]' Custumize=''>
                <Inputer/>
                <AnnoncesSpace/>
            </ClientContainter>

            <ClientContainter LayoutBackground='z-0' Custumize='py-6 text-center'>
                <button className='bg-sky text-white font-extrabold rounded-xl p-3 text-lg '>CONSULTER TOUTES LES ANNONCES</button>
            </ClientContainter>
        </div>
    );
}

export default Home;
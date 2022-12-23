import React from 'react';
import AnnonceCard from './AnnonceCard';
import filtre from '../../../Assets/filtre.svg'

function AnnonceFilterSpace(props) {
    return (
        <div className='mx-auto md:p-6 '>
            <div className='space-x-5 mb-2 text-center mx-auto text-night font-bold'>
                <img src={filtre} alt="" className='w-8 h-8 inline' />
                <h1 className='text-xl md:text-3xl inline'>Filtrer toutes les annonces</h1>
            </div>
            <div className='space-x-5 mb-6 text-center mx-auto'>
                <h1 className='text-lg md:text-xl inline'><b>336 biens</b> immobiliers: trouvez l'appartement ou la maison de vos rêves !</h1>
            </div>
            <div className="md:grid grid-cols-2 gap-6 untilMd:space-y-10">
                <AnnonceCard />
                <AnnonceCard />
                <AnnonceCard />
                <AnnonceCard />
            </div>
        </div>
    );
}

export default AnnonceFilterSpace;
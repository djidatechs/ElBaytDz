import React, { useEffect } from 'react';
import AnnonceCard from './AnnonceCard';

function AnnoncesSpace({DefaultFetch="" , grid=false}) {
    useEffect(()=>{},[])
    
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 py-6 gap-6 space-y-10 sm:space-y-0'>
            <AnnonceCard/>
            <AnnonceCard/>
            <AnnonceCard/>
            <AnnonceCard/>
            <AnnonceCard/>
            <AnnonceCard/>
        </div>
    );
}

export default AnnoncesSpace;
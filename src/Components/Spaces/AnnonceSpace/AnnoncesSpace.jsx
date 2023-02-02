import React, { useEffect, useState } from 'react';
import AnnonceCard from './AnnonceCard';

function AnnoncesSpace({DefaultFetch="" , }) {
    const [annonces , setAnnonces] = useState([])

    useEffect(()=>{
        fetch(DefaultFetch)
        .then(response => response.json())
        .then(data => setAnnonces(data))
    },[])
    
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 py-6 gap-6 space-y-10 sm:space-y-0'>
            {
                !annonces.length 
                ? <></>
                : annonces.map(annonce=>(
                <AnnonceCard
                 
                    Category={annonce.category}
                    Desc={annonce.description}
                    Price={annonce.price}
                    Surface={annonce.surface}
                    Type={annonce.property_type}
                    key={annonce.id}
                    id={annonce.id}
                    
                />))
            }
           
        </div>
    );
}

export default AnnoncesSpace;
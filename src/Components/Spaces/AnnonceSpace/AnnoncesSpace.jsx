import React, { useEffect, useState } from 'react';
import AnnonceCard from './AnnonceCard';
import AnnonceCardSkelaton from './AnnonceCardSkelaton';

function AnnoncesSpace({DefaultFetch="" , remove }) {
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
                ? <AnnonceCardSkelaton repeat={6}/>
                : annonces.map(annonce=>(
                <AnnonceCard
                 
                    Category={annonce.category}
                    Desc={annonce.description}
                    Price={annonce.price}
                    Surface={annonce.surface}
                    Type={annonce.property_type}
                    key={annonce.id}
                    id={annonce.id}
                    Commune={annonce.commune_id}
                    remove ={remove}
                    
                />))
            }
           
        </div>
    );
}

export default AnnoncesSpace;
import React from 'react';
import { useParams } from 'react-router-dom';

function Annonce(props) {
    
    const {annonceId} = useParams();

    return (
        <div>
            Annonce {annonceId || 'something went wrong'}
        </div>
    );
}

export default Annonce;
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrump from '../../../../Components/Annonce/BreadCrump';

function Annonce(props) {
    const {annonceId} = useParams();
    return (
        <div>
            <BreadCrump text={"Annonces ❯ F3 Boumardes"}/>  {/* Client contained */}
        </div>
    );
}

export default Annonce;
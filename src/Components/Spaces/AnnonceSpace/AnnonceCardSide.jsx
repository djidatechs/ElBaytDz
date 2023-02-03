import React from 'react';
import { Link } from 'react-router-dom';

function AnnonceCardSide(props) {
    return (
        <div className={"card lg:card-side bg-base-100 shadow-xl w-full"}>
            <figure className=''><img src="https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8" alt="Shoes" className='overflow-hidden w-full h-full' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl text-old">F3 Boumardes</h2>
                <h4 className="card-title text-sm">3 chambes, 11m²</h4>
                <h3 className="card-title">à Boumerdès</h3>
                <p>très jolie f3 au rez-de-chaussée surélevé près de toutes commodités poste . université. transport a 5 minutes de la plage à pied...</p>
                <Link to={"/annonces/"} className=" text-night hover:rounded-xl hover:text-sun hover:underline">En savoir plus</Link>
                
            </div>
        </div>
    );
}

export default AnnonceCardSide;
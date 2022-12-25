import React from 'react';
import { Link } from 'react-router-dom';
import FavHeart from '../../../Assets/FavHeart.svg'

function AnnonceCard({ key="" , Category , Type , Surface , Desc , Price , Image , side=false  }) {
    return (

        <div className={(side ? "card lg:card-side":"card") + " w-full select-none  relative  rounded-3xl rounded-tr-none  bg-white shadow-xl shadow-slate-500 md:hover:scale-[102%] transition duration-300 ease-out "}>
        <figure className={side ? "untilLg:w-full untilLg:h-full " : 'w-full h-full'}><img src="https://placeimg.com/400/225/arch" alt="Shoes" className={(side ? "overflow-hidden " : "")+'w-full h-full'} /></figure>
        <div className="card-body">
            <h2 className={"card-title font-bold text-3xl text-old "+ (side?"mt-6":"")}>F3 Boumardes</h2>
            <h4 className="card-title text-sm">3 chambes, 11m²</h4>
            <h3 className="card-title">à Boumerdès</h3>
            <p>très jolie f3 au rez-de-chaussée surélevé près de toutes commodités poste . université. transport a 5 minutes de la plage à pied...</p>
            <Link to={"/annonces/"+key} className=" text-night hover:rounded-xl hover:text-sun hover:underline">En savoir plus</Link>
            <div className="card-actions justify-end">
            <Link to={"/annonces/1"} className="bg-sun p-3 text-white font-bold rounded-xl">Contactez</Link>
            </div>
        </div>
            <div className={'absolute bg-night p-3 text-white right-0 rounded-bl-xl text-md md:text-xl text-center font-bold w-1/2 '+(side?"lg:w-1/3":"")}>19 000 00 DA</div>
            <div className='absolute bg-white  left-2 top-2 rounded-full w-10 h-10 cursor-pointer hover:bg-night transition dration-300 ease-out '>
                <div className='relative w-full h-full'>
                <img src={FavHeart} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
            </div>
            
        </div>
    );
}

export default AnnonceCard;
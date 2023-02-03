import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FavHeart from '../../../Assets/FavHeart.svg'
import { useEffect } from 'react';
import logoforcard from "../../../Assets/logoforcard.png"
import axios from 'axios';
import CategoryMatrixFr from '../../../Assets/js/CategoryMatrix';

function AnnonceCard({ key="" , remove,Category , Type , Surface , Desc , Price , id ,Commune,Wilaya,Image, side=false  }) {
    const [image , setImage] = useState([]);
    const ref_ = useRef();
    const [wilaya_commune , set_wilaya_commune] = useState({wilaya : '' , commune :''})
    useEffect(()=>{
        if (Image) {
            setImage([{data:Image}])
        }
        else{
            fetch(`http://localhost:8000/photos_realestate?realestate=${id}&onlyone=y`)
            .then(res=>res.json())
            .then(data=>setImage(data))
        }
        fetch(`http://localhost:8000/wilayascommune?communeID=${Commune}`)
        .then(res=>res.json())
        .then(data=>set_wilaya_commune({wilaya: data.wilaya+" | " , commune:data.commune+" | " }))

    },[])
    const removeFunc= () =>{
        if (ref_.current?.className)
            ref_.current.className = "hidden"
        const response = axios.delete("http://localhost:8000/realestate/"+id+"/remove")
    } 
    return (

        <div ref={ref_} key={key} className={(side ? "card lg:card-side":"card") + " w-full select-none  relative  rounded-3xl rounded-tr-none  bg-white shadow-xl shadow-slate-500 md:hover:scale-[102%] transition duration-300 ease-out "}>
        <figure className={side ? "bg-sky untilLg:w-full untilLg:h-full " : 'w-full h-full min-h-[50px] max-h-[250px]'}>
            <img 
                src={ image.length ? `data:image/jpeg;base64,${image[0].data}` : logoforcard} 
                alt="Shoes" 
                className={(side ? "overflow-hidden " : "")+'w-full h-full min-h-[50px] max-h-[250px]'} />
        </figure>
        <div className="card-body">
            <h2 className={"card-title font-bold text-3xl text-old "+ (side?"mt-6":"")}>{Type}</h2>
            <h4 className="card-title text-sm">{wilaya_commune.wilaya}  {wilaya_commune.commune}  {Surface}m²</h4>
            <h3 className="card-title">{CategoryMatrixFr(Category)}</h3>
            <p>{Desc}</p>
            <Link to={"/annonces/"+id} className=" text-night hover:rounded-xl hover:text-sun hover:underline">En savoir plus</Link>
            <div className="card-actions justify-end">
            {
                remove ? (
                    <Link onClick={removeFunc} className="bg-red-600 p-3 text-white font-bold rounded-xl">Suppremer</Link>
                ) : (
                    <Link to={"/annonces/"+id} className="bg-sun p-3 text-white font-bold rounded-xl">Contactez</Link>
                )
            }
            </div>
        </div>
            <div className={'absolute bg-night p-3 text-white right-0 rounded-bl-xl text-md md:text-xl text-center font-bold w-1/2 '+(side?"lg:w-1/3":"")}>{Price}DA</div>
            <div className='absolute bg-white  left-2 top-2 rounded-full w-10 h-10 cursor-pointer hover:bg-night transition dration-300 ease-out '>
                <div className='relative w-full h-full'>
                <img src={FavHeart} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                </div>
            </div>
            
        </div>
    );
}

export default AnnonceCard;
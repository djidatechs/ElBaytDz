import React, { useEffect, useState } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import AnnonceCard from '../Spaces/AnnonceSpace/AnnonceCard';
import { useElbayt } from '../../pages/Auth/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function EtapeCbn({setStep , context}) {
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    const [user, setUser] = useElbayt();
    const [validator , setValidator] = useState (false)
    const [annonce , setAnnonce] = context
    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log(annonce)
        console.log(annonce.photos[0].split(",")[1])
        setAnnonce (
            current=>{
                current.user= user.email
                return current
            }
        )
    },[])

    useEffect(()=>{
        
        if (validator){
            const AXIOSPOST = async() => {
                const respones = await axios.post("https://elbayt-backend.onrender.com/realestate/", {...annonce})
                console.log(respones.data)
                if (respones.data.id)
                navigate("/annonces/"+respones.data.id)
               }
            AXIOSPOST();            
        }
    },[validator])


    return (
        <ClientContainter>
            <div className='max-w-96 text-center'>
                <div className="md:grid grid-cols-3 gap-6 untilMd:space-y-10 py-10">
                <div onClick={console.log(annonce)}>DJIDAISSAM</div>
                <AnnonceCard
                Image={annonce.photos[0]}
                Category={annonce.category}
                Desc={annonce.description}
                Price={annonce.price}
                Surface={annonce.surface}
                Type={annonce.property_type}
                id={0}
                key='0'
                
                />
                <div></div>
                </div>
            </div>
            <button className={`py-2 selenium_btn4 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right mt-10 ${validator ? "animate-pulse" : ""}`} onClick={()=>{setValidator(true)}}>{
                !validator ? "Creer annonce" : "Creation ..."
            }</button>
        </ClientContainter>
    );
}

export default EtapeCbn;
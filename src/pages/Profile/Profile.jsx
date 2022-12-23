import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import photo from "../../Assets/Logo.svg"

function Profile(props) {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    return (
        <ClientContainter LayoutBackground='' Custumize=''>
             
            <div className='bg-slate-200  w-full md:w-[80%] lg:w-[60%] mx-auto text-center rounded-xl p-12'>

                <h1 className='text-night text-xl font-bold'>Photo de profile</h1>
                <img className="mask  mask-squircle w-32 m-6 mx-auto" src="https://placeimg.com/160/160/arch" />
                
                <h1 className='text-night text-xl font-bold'>Mes informations</h1>
                <Infos line title={"Utilisateur"} value="Djida Issam" />
                <Infos line tooltip="Clickez pour changer le num de telephone" title={"Telephone"} value="(213) 558 71 31 53" />
                <Infos line title={"Google"} value="ji_djida@esi.dz" />

            </div>

            </ClientContainter>
    );
}

export default Profile;


function Infos ({line , title , value , tooltip=false}) {
    return (
    <div className={line ? "flex  mx-0 lg:mx-24  border-b-2 border-gray-700" : "flex mx-0 lg:mx-24" }>
        <div data-tip={tooltip} className={`text-left w-1/4 lg:w-1/2 text-black font-semibold text-xs md:text-lg lg:text-xl p-5 cursor-pointer ${tooltip ? "tooltip":undefined}`}><h3>{title}</h3></div>
        <div data-tip={tooltip} className={`text-right w-3/4 lg:w-1/2 text-night font-bold text-xs md:text-lg lg:text-xl p-5 cursor-pointer ${tooltip ? "tooltip":undefined}`}><h3>{value}</h3></div>
    </div>
    )
}
import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import photo from "../../Assets/Logo.svg"
import { useElbayt } from '../Auth/AuthContext';

function Profile(props) {
    const [user,setUser] = useElbayt()

    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
        console.log(user)
    },[])
    return (
        <ClientContainter LayoutBackground='' Custumize=''>
             
            <div className='bg-slate-200  w-full md:w-[80%] lg:w-[60%] mx-auto text-center rounded-xl p-12'>

                <h1 className='text-night text-xl font-bold'>Photo de profile</h1>
                <img className="mask  mask-squircle w-32 m-6 mx-auto" src={user.picture} />
                
                <h1 className='text-night text-xl font-bold'>Mes informations</h1>
                <Infos line title={"Utilisateur"} value={user.name} />
                <Infos line title={"Role"} value={user.role} />
                <Infos line title={"Google"} value={user.email} />

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
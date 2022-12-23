import React from 'react';
import AccountIcon from '../../Assets/AccountIcon.svg'
import LogIcon from '../../Assets/LogIcon.svg'
import { useNavigate } from 'react-router-dom';

function UserActions(props) {
    const navigate = useNavigate();
    const fakeAuth = true ; 
    if (fakeAuth === false) return (
        <>
            <button className='font-semibold p-2 text-sm'>se connecter</button>
            <button className='bg-white text-night font-extrabold rounded-xl p-2 text-sm'>Publier une annonce</button>
        </>

    )
    return (
        <>
            <img onClick={()=>{navigate("/profile")}} src={AccountIcon} className="h-5 cursor-pointer" alt='icon'/>
            <img src={LogIcon} className="h-5" alt='icon'/>
        </>
    );
}

export default UserActions;
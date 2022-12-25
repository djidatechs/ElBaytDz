import React from 'react';
import AccountIcon from '../../Assets/AccountIcon.svg'
import LogIcon from '../../Assets/LogIcon.svg'
import { useNavigate } from 'react-router-dom';
import fakeauth from '../../FakeAuth/fakeauth';

function UserActions(props) {
    const navigate = useNavigate();
    
    if (fakeauth === false) return (
        <>
            <button className='font-semibold p-2 text-xl'>se connecter</button>
            <button className='bg-white text-night font-extrabold rounded-xl py-2 px-3 text-lg hover:bg-night hover:text-white transition duration-300 ease-out'>Publier une annonce</button>
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
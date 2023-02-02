import React from 'react';
import AccountIcon from '../../Assets/AccountIcon.svg'
import LogIcon from '../../Assets/LogIcon.svg'
import { Link, useNavigate } from 'react-router-dom';
import fakeauth from '../../FakeAuth/fakeauth';
import { useElbayt } from '../../pages/Auth/AuthContext';

function UserActions(props) {
    const navigate = useNavigate();
    const [user , setUser] = useElbayt()
    
    
    if (!user.id) return (
        <>
            <button onClick={()=>{navigate("/signup")}} className='font-semibold p-2 text-xl'>se connecter</button>
            <Link to={"/annonces/new"} className='bg-white text-night font-extrabold rounded-xl py-2 px-3 text-lg hover:bg-night hover:text-white transition duration-300 ease-out'>Publier une annonce</Link>
        </>

    )
    return (
        <>
            {
            (user.role == "admin") && <button onClick={()=>{navigate("/admin")}} className='font-bold p-2 '>Admin</button>
            }
            <img onClick={()=>{navigate("/profile")}} src={AccountIcon} className="h-5 cursor-pointer" alt='icon'/>
            <img  onClick={()=>{
                    localStorage.removeItem("access_token")
                    localStorage.removeItem("user_info")
                    setUser({})
                    
                }} src={LogIcon} className="h-5 cursor-pointer" alt='icon'/>
        </>
    );
}

export default UserActions;
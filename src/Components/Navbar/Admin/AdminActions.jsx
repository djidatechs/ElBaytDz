import React from 'react';
import AccountIcon from '../../../Assets/AccountIcon.svg'
import LogIcon from '../../../Assets/LogIcon.svg'
import { Link, useNavigate } from 'react-router-dom';
import fakeauth from '../../../FakeAuth/fakeauth';
import { useElbayt } from '../../../pages/Auth/AuthContext';

function AdminActions(props) {
    const navigate = useNavigate();
    const [user , setUser] = useElbayt()
    
    return (
        <>
            <img onClick={()=>{navigate("/profile")}} src={AccountIcon} className="h-5 cursor-pointer" alt='icon'/>
            <img 
            onClick={()=>{
                localStorage.removeItem("access_token")
                localStorage.removeItem("user_info")
                setUser({})
                
            }}
            src={LogIcon} className="h-5 cursor-pointer" alt='icon'/>
        </>
    );
}

export default AdminActions;
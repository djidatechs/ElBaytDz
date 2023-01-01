import React from 'react';
import AccountIcon from '../../../Assets/AccountIcon.svg'
import LogIcon from '../../../Assets/LogIcon.svg'
import { Link, useNavigate } from 'react-router-dom';
import fakeauth from '../../../FakeAuth/fakeauth';

function AdminActions(props) {
    const navigate = useNavigate();
    
    return (
        <>
            <img onClick={()=>{navigate("/profile")}} src={AccountIcon} className="h-5 cursor-pointer" alt='icon'/>
            <img src={LogIcon} className="h-5" alt='icon'/>
        </>
    );
}

export default AdminActions;
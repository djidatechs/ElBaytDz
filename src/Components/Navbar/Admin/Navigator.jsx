import React from 'react';
import { Link } from 'react-router-dom';
import Linker from '../../Shared/Linker';
import fakeauth from '../../../FakeAuth/fakeauth';
function Navigator(props) {
    
    return (
        
        <ul className="space-x-9 menu-horizontal px-1 text-lg font-bold text-white">
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/admin/dashboard"}>Annonce</Linker></li>
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/admin/dashboard/users"}>utilisateurs</Linker></li>
        </ul>
    
    );
}

export default Navigator;
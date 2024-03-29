import React from 'react';
import { Link } from 'react-router-dom';
import Linker from '../Shared/Linker';
import fakeauth from '../../FakeAuth/fakeauth';
import { useElbayt } from '../../pages/Auth/AuthContext';
function Navigator(props) {
    const [user , setUser] = useElbayt()
    if (! user.id) return (
        <ul className="space-x-9 menu-horizontal px-1 text-lg font-bold text-white">
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/"}>Home</Linker></li>
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/aboutus"}>A propos</Linker></li>
        </ul>
    )
    return (
        
        <ul className="space-x-9 menu-horizontal px-1 text-lg font-bold text-white">
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/"}>Home</Linker></li>
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/annonces"}>Annonces</Linker></li>
        <li className=''><Linker styles='hover:text-sun transition duration-100 ease-in' to={"/aboutus"}>A propos</Linker></li>
        </ul>
    
    );
}

export default Navigator;
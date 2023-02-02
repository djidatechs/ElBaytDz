import React from 'react';
import { Link } from 'react-router-dom';
import { useElbayt } from '../../../pages/Auth/AuthContext';

function Dropdown(props) {
    const [user , setUser]= useElbayt();
    return (
        <div className="dropdown dropdown-left inline dropdown-hover">
            <label tabIndex={0} className=" text-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact  dropdown-content   mt-3 p-2 shadow bg-night text-white rounded-box w-52">
            <div className="divider text-white bg-sky rounded-xl mx-2 p-4">Admin</div>
                <li><Link to={"/"}>Annonces</Link></li>
                <li><Link to={"/annonces"}>Utilisateurs</Link></li>
                <div className="divider text-white bg-sky rounded-xl mx-2 p-4">Menu</div>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/annonces"}>Annonces</Link></li>
                <li><Link to={"/aboutus"}>A propos</Link></li>
                <div className="divider text-white bg-sky rounded-xl mx-2 p-4">Compte</div>
                <li><Link to={"/profile"} >Profile</Link></li>
                <li><Link to={"/profile/favoris"} >Mes favoris</Link></li>
                <li><Link to={"/profile/offers"} >Mes offers</Link></li>
                <li><Link onClick={()=>{
                    localStorage.removeItem("access_token")
                    localStorage.removeItem("user_info")
                    setUser({})
                    
                }}>Logout</Link></li>
            </ul>
        </div>
    );
}

export default Dropdown;
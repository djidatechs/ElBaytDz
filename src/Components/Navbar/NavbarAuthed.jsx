import React from 'react';
import logo from '../../Assets/Logo.svg'

import Dropdown from './Dropdown';

import Navigator from './Navigator';
import UserActions from './UserActions';

function NavbarAuthed(props) {
    return (
        <div className="navbar p-3 z-50">

            <div className="navbar-start">
                
                <img src={logo} className="h-14" alt='logo'/>
            </div>

            <div className="navbar-center hidden lg:flex">
                <Navigator/>
            </div>

            <div className="navbar-end  text-white">
                <div className='hidden lg:flex space-x-5'>
                <UserActions/>
                </div>
                <div className='lg:hidden'><Dropdown/></div>
            </div>
            
        </div>
    );
}

export default NavbarAuthed;
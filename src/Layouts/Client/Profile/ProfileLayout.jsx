import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ClientContainter from '../../Containers/ClientContainter';

function ProfileLayout(props) {
    return (
        <div className='sm:pt-20'>
            <ClientContainter Custumize='my-10 '>
            <ul className="space-x-9 text-center lg:mx-64 flex px-1 text-lg font-bold untilMd:hidden ">
                <li className='w-1/3'><ProfileLinker styles='hover:text-sky transition duration-100 ease-in' to={"/profile/"}>Détails de l'utilisateur</ProfileLinker></li>
                <li className='w-1/3'><ProfileLinker styles='hover:text-sky transition duration-100 ease-in' to={"/profile/favoris"}>Liste des messages</ProfileLinker></li>
                <li className='w-1/3'><ProfileLinker styles='hover:text-sky transition duration-100 ease-in' to={"/profile/offers"}>Mes offres</ProfileLinker></li>
            </ul>
            </ClientContainter>
            <Outlet/>
        </div>
    );
}

export default ProfileLayout;


function ProfileLinker({children , to ,styles}) {
    const path = useParams();
    const Param = path['*'].split("/")[1]?.toLowerCase() || ''
    const toParam = to?.toLowerCase()?.split("/")[2] 
    const fakeActive = Param === toParam ? true : false
    const Color = fakeActive ? "text-sun" : "text-night"
    console.log({Param,toParam})

    return (
    <div className={fakeActive ? 'underline decoration-4 underline-offset-8' : undefined}>
      <Link to={to} className={styles + " " + Color}>
        {children}
      </Link>
    </div>
    )
}




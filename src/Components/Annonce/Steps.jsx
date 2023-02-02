import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';

function Steps({step}) {
    
    
    return (
        <ClientContainter LayoutBackground='bg-gray-200' Custumize='sm:pt-20 w-full text-center'>
        <h1 className='text-night text-xl font-semibold'>Creation d'une annonce</h1>
        <ul className="steps w-1/2">
            <li className={`step step-neutral `}>Etape 01</li>
            <li className={`step ${step%4 >= 1 ? 'step-neutral' : ''} `}>Etape 02</li>
            <li className={`step ${step%4 >= 2 ? 'step-neutral' : ''} `}>Etape 03</li>
            
        </ul>
        </ClientContainter>
    );
}

export default Steps;
import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';

function EtapeCbn({setStep}) {
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    return (
        <ClientContainter>
            <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right mt-10' onClick={()=>setStep(c=>c+1)}>New annonce</button>
        </ClientContainter>
    );
}

export default EtapeCbn;
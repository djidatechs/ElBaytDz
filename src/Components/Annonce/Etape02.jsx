import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';

function Etape02 ({setStep}) {
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    return (
    <ClientContainter>
        {/* TODO */}
       <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={()=>setStep(c=>c+1)}>Suivant</button>
        </ClientContainter>
    )}
    

export default Etape02;
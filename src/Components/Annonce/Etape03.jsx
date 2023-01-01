import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
function Etape03 ({setStep}) {
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    return (
        <ClientContainter Custumize='untilMd:text-center '>
        {/* TODO */}
        <div className=' md:ml-[100px] lg:ml-[200px] '>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Telehpone</h1>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
            <h1 className='text-xl text-night font-semibold my-6 '>Description</h1>
                <textarea style={{resize: "none"}} type="text" placeholder="Message" className="input input-bordered  w-full max-w-lg  block min-h-[200px] " />
            </div>
        </div>
        <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={()=>setStep(c=>c+1)}>Valider</button>
        
        </ClientContainter>
    )}
    

export default Etape03;
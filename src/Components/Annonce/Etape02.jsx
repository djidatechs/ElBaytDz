import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import addpic from "../../Assets/addPic.svg"
import { useRef } from 'react';

function Etape02 ({setStep, context}) {
    const [annonce , setAnnonce] = context
    const surface_ref = useRef(0)
    const price_ref = useRef(0)
    
    const setCOntext = () => {
        const price = price_ref.current.value
        const surface = surface_ref.current.value
        setAnnonce(
            current=>{
                current.price = parseFloat(price) || 0
                current.surface = parseFloat(surface) || 0
                return current
            }
        )
        setStep(c=>c+1)

    }

    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])


    return (
        <ClientContainter Custumize='untilMd:text-center '>
        {/* TODO */}
        <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-6 md:ml-[100px] lg:ml-[200px] '>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Surface de bien en metre cube</h1>
                <input ref={surface_ref} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Prix de bien en dinar algerien</h1>
                <input ref={price_ref} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className='col-span-2'>
                <h1 className='text-xl text-night font-semibold mt-6 '>Photos de bien</h1>
                <h2 className='ml-5'>Vous avez besoin de joindre des photos claires pour votre annonce</h2>
                <h2 className='ml-5'>01 photo en moins</h2>
                <img src={addpic} alt="" />
            </div>
        
        </div>
       <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={setCOntext}>Suivant</button>
        </ClientContainter>
    )}
    

export default Etape02;
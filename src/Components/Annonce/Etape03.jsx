import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import { useRef } from 'react';
function Etape03 ({setStep , context}) {
    const [annonce , setAnnonce] = context
    const phone_ref = useRef(0)
    const desc_ref = useRef(0)
    const setContext = () => {
        const phone = phone_ref.current.value
        const desc = desc_ref.current.value
        setAnnonce(
            current=> {
                current.contact_phone = phone
                current.description = desc
                console.log(current)
                return current
            }
        )
        setStep(c=>c+1)

    }
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    return (
        <ClientContainter Custumize='untilMd:text-center '>
        {/* TODO */}
        <div className=' md:ml-[100px] lg:ml-[200px] '>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Telehpone</h1>
                <input ref={phone_ref} type="text" placeholder="Type here" className="input selenium_phone input-bordered w-full max-w-xs" />
            </div>
            <div>
            <h1 className='text-xl text-night font-semibold my-6 '>Description</h1>
                <textarea ref={desc_ref} style={{resize: "none"}} type="text" placeholder="Message" className="input selenium_description input-bordered  w-full max-w-lg  block min-h-[200px] " />
            </div>
        </div>
        <button className='py-2 px-10 selenium_btn3 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={setContext}>Valider</button>
        
        </ClientContainter>
    )}
    

export default Etape03;
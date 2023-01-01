import React, { useEffect, useRef } from 'react';
import img1 from '../../Assets/img1.png'
import Logosignup from '../../Assets/Logosignup.svg'
import google from "../../Assets/google.svg"
function Signup({Image="presentation", ImageCustumize="", Title }) {
    const ImageRef = useRef(0);

   
    return (
        <div className=" relative z-20">
        <figure className='bg-sky '><img ref={ImageRef} src={img1} className="w-full h-[60vh] brightness-50" /></figure>
        <div className="absolute text-white top-1/3 md:top-10  left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2">
            <img src={Logosignup} className={"w-80 "} alt="" />
        </div>
        <div className="absolute text-white  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=' w-96 bg-transparent rounded-xl drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)]  '>
                <div className='bg-night rounded-t-xl text-2xl font-bold p-2 text-center'>Se connecter</div>
                <div className='bg-white rounded-b-xl pt-10'>
                    <h3 className='text-center text-night font-semibold text-lg'>Connectez-vous à votre compte</h3>
                    <div className=' py-10   text-center '>
                        <div className='border-night space-x-3 cursor-pointer   text-night border-2 mx-10 rounded-xl p-3 hover:bg-night hover:text-white transition duration-300 ease-out'>
                        <img src={google} className="inline" alt="" />
                        <h3 className='inline font-bold '>Google</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;



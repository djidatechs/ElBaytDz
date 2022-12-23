import React, { useEffect, useRef } from 'react';
import img2 from '../../Assets/img2.png'
import Underline from '../../Assets/Underline.svg'
function PresentationCover({Image="presentation", ImageCustumize="", Title }) {
    const ImageRef = useRef(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        
        ImageRef.current.style.opacity = Math.min(1,1- (position / 500))
    };
 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        const position = window.pageYOffset;
        ImageRef.current.style.opacity = Math.min(1,1- (position / 500))
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="relative z-20 text-center">
            <figure className='bg-sky '><img ref={ImageRef}  src={img2} className="w-screen opacity-100 brightness-50" /></figure>
            <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className='font-extrabold text-base md:text-4xl xl:text-[55px] leading-loose'>Découvrir toutes nos <UnerLiner/> !</h1>
        </div>
        </div>
    );
}

export default PresentationCover;


function UnerLiner (text) {
    return (
        <>
        <br />
        <span className='mt-2'>
        <div className='relative text-center inline leading-loose'>Annonces
        <img src={Underline} className ='absolute  -bottom-1 left-1/2 -translate-x-1/2 inline'/>
        </div>
        </span>
        </>
    )
}
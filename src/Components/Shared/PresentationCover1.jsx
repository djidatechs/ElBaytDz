import React, { useEffect, useRef } from 'react';
import img1 from '../../Assets/img1.png'
import Underline from '../../Assets/Underline.svg'
function PresentationCover({Image="presentation", ImageCustumize="", Title }) {
    const ImageRef = useRef(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        
        ImageRef.current.style.opacity = Math.min(1,1- (position / 500))
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className=" relative z-20">
        <figure className='bg-sky '><img ref={ImageRef} src={img1} className="w-full h-full opacity-100" /></figure>
        <div className="absolute text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className='font-extrabold text-base md:text-4xl xl:text-[55px]'>Emménagez en <UnerLiner/> !</h1>
        </div>
        </div>
    );
}

export default PresentationCover;


function UnerLiner (text) {
    return (
        <span>
        <div className='relative inline'>1, 2, 3
        <img src={Underline} className ='absolute  -bottom-1 left-1/2 -translate-x-1/2 inline'/>
        </div>
        </span>
    )
}
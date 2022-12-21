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
        <div className="relative z-20">
            <figure className='bg-sky '><img ref={ImageRef}  src={img2} className="w-screen opacity-100" /></figure>
        </div>
    );
}

export default PresentationCover;


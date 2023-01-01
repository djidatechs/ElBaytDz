import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import ArrowL from '../../Assets/ArrowL.svg'
import ArrowR from '../../Assets/ArrowR.svg'


function BreadCrump({text}) {
    return (
        <ClientContainter LayoutBackground='bg-gray-200' Custumize='sm:pt-20 w-full'>
            <div className='w-full p-2'>
                <h1 className=' py-5 text-xl font-extrabold text-night inline'>{text} </h1>
                {/* <div className='ml-[50%] inline space-x-1  '>
                    <img src={ArrowL} className='inline w-8 h-8' alt="" />
                    <img src={ArrowR} className='inline w-8 h-8' alt="" />
                </div> */}
            </div>
        </ClientContainter>
    );
}

export default BreadCrump;
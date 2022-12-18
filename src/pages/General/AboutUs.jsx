import React from 'react';

import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover2 from '../../Components/Shared/PresentationCover2';

function AboutUs(props) {
    return (
        <div className= ''>

            <ClientContainter LayoutBackground='z-10' CustumizeOverRide='w-full'>
                <PresentationCover2/>
            </ClientContainter>

            <ClientContainter LayoutBackground='z-0' Custumize=''>
            
            </ClientContainter>

           
            

           
        </div>
    );
}

export default AboutUs;
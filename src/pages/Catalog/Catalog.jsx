import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover2 from '../../Components/Shared/PresentationCover2';

function Catalog(props) {
    return (
        <div className= ''>

        <ClientContainter LayoutBackground='' CustumizeOverRide='w-full'>
            <PresentationCover2/>
        </ClientContainter>

        <ClientContainter LayoutBackground='' Custumize=''>
         
        <div className=''></div>

        </ClientContainter>
    </div>
    );
}

export default Catalog;
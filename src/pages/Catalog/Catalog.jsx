import React , {useEffect, useState} from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover2 from '../../Components/Shared/PresentationCover2';
import Sidebar from '../../Components/Sidebar/Sidebar';
import AnnonceFilterSpace from '../../Components/Spaces/AnnonceSpace/AnnonceFilterSpace';
import Paginator from '../../Components/Shared/Paginator';
import { ElbaytFiltersProvider, useElbaytFilters } from './CatalogContext';


function Catalog(props) {
    
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    
    return (

        <div className= ''>
            
            <label htmlFor="my-modal-6" className="fixed bottom-9 left-9 z-50 lg:hidden">
            <p className='text-center py-2 px-4 text-lg font-semibold bg-sky  text-white  rounded-xl'>Ouvrir filters</p>
            </label>
            
            <ClientContainter LayoutBackground='' CustumizeOverRide='w-full'>
                <PresentationCover2/>
            </ClientContainter>

            <ClientContainter LayoutBackground='' Custumize='flex overflow-y-auto mt-5 py-5'>
                <div className="lg:w-1/3">
                    <Sidebar/>
                </div>
                <div className="w-2/3 untilLg:w-full ">
                    <AnnonceFilterSpace  DefaultFetch={`https://elbayt-backend.onrender.com/realestate?`} />
                </div>
            </ClientContainter>
        </div>
    );
}

export default Catalog;
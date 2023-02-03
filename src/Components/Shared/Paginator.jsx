import React from 'react';
import { useElbaytFilters } from '../../pages/Catalog/CatalogContext';

function Paginator({pageEngine}) {

    const {pageController} = useElbaytFilters();
    const [page , setPage] = pageController

    return (
        <div className="m-10 space-x-2 scale-">
        <button onClick={()=>{ window.scrollTo({top:0 , behavior: 'smooth'});setPage(page-1)}} className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">«</button>
        <button  className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 text-white rounded-xl  lg:font-bold hover:btn-sun bg-sky ">{page}</button>
       
        
        <button onClick={()=>{ window.scrollTo({top:0 , behavior: 'smooth'});setPage(page+1)}} className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">»</button>
        </div>
    );
}

export default Paginator;
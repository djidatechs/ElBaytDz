import React, { useState } from 'react';
import FilterHolder from './FilterHolder';
import { useElbaytFilters } from '../../pages/Catalog/CatalogContext';

function FilterType(props) {
    const [select , setSelect] = useState([1,2,3,4,5,6]);
    const { typeController} = useElbaytFilters();
    const [type , setType] = typeController

    return (
        <FilterHolder action={()=>{setSelect( [1,2,3,4,5])}} title={"Type de bien"} subtitle={"Clicez sur le titre pour selectionner/deselectrioner toutes"}>
            <div className="flex flex-wrap">
                <div onClick={()=>{ setType(1);setSelect([1])} } className={`cursor-pointer py-1 px-2 ${select.includes(1) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Apparetement</div>
                <div onClick={()=>{ setType(2);setSelect([2])} } className={`cursor-pointer py-1 px-2 ${select.includes(2) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Maison</div>
                <div onClick={()=>{ setType(3);setSelect([3])} } className={`cursor-pointer py-1 px-2 ${select.includes(3) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Terrain Agricole</div>
                <div onClick={()=>{ setType(4);setSelect([4])} } className={`cursor-pointer py-1 px-2 ${select.includes(4) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Bungalow</div>
                <div onClick={()=>{ setType(5);setSelect([5])} } className={`cursor-pointer py-1 px-2 ${select.includes(5) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Terrains</div>
                <div onClick={()=>{ setType(6);setSelect([1,2,3,4,5,6])} } className={`cursor-pointer py-1 px-2 ${select.includes(6) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Tous</div>
            </div>
        </FilterHolder>
    );
}

export default FilterType;
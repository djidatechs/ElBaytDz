import React, { useState } from 'react';
import FilterHolder from './FilterHolder';

function FilterType(props) {
    const [select , setSelect] = useState([1,2,3,4,5]);
    return (
        <FilterHolder action={()=>{setSelect( [1,2,3,4,5])}} title={"Type de bien"} subtitle={"Clicez sur le titre pour selectionner/deselectrioner toutes"}>
            <div className="flex flex-wrap">
                <div onClick={()=>setSelect([1])} className={`cursor-pointer py-1 px-2 ${select.includes(1) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Apparetement</div>
                <div onClick={()=>setSelect([2])} className={`cursor-pointer py-1 px-2 ${select.includes(2) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Maison</div>
                <div onClick={()=>setSelect([3])} className={`cursor-pointer py-1 px-2 ${select.includes(3) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Terrain Agricole</div>
                <div onClick={()=>setSelect([4])} className={`cursor-pointer py-1 px-2 ${select.includes(4) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Bungalow</div>
                <div onClick={()=>setSelect([5])} className={`cursor-pointer py-1 px-2 ${select.includes(6) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Terrains</div>
            </div>
        </FilterHolder>
    );
}

export default FilterType;
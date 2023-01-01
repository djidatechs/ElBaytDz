import React, { useState } from 'react';
import FilterHolder from './FilterHolder';

function FilterCategory(props) {
    const [select , setSelect] = useState([1,2,3,4]);
    return (
        <FilterHolder action={()=>{setSelect( [1,2,3,4])}} title={"Categorie de bien"} subtitle={"Clicez sur le titre pour selectionner/deselectrioner toutes"}>
            <div className="flex flex-wrap">
                <div onClick={()=>setSelect([1])} className={`cursor-pointer py-1 px-2 ${select.includes(1) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Vente</div>
                <div onClick={()=>setSelect([2])} className={`cursor-pointer py-1 px-2 ${select.includes(2) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Echange</div>
                <div onClick={()=>setSelect([3])} className={`cursor-pointer py-1 px-2 ${select.includes(3) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Location pour vacances</div>
                <div onClick={()=>setSelect([4])} className={`cursor-pointer py-1 px-2 ${select.includes(4) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Location</div>
            </div>
        </FilterHolder>
    );
}

export default FilterCategory;
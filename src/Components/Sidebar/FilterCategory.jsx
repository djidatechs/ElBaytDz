import React, { useState } from 'react';
import FilterHolder from './FilterHolder';
import { useElbaytFilters } from '../../pages/Catalog/CatalogContext';

function FilterCategory(props) {
    const [select , setSelect] = useState([1,2,3,4,5]);
    const { categoryController} = useElbaytFilters();
    const [category , setCategory] = categoryController
    return (
        <FilterHolder action={()=>{setSelect( [1,2,3,4])}} title={"Categorie de bien"} subtitle={"Clicez sur le titre pour selectionner/deselectrioner toutes"}>
            <div className="flex flex-wrap">
                <div onClick={()=> {setCategory(1);setSelect([1])} } className={`cursor-pointer py-1 px-2 ${select.includes(1) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Vente</div>
                <div onClick={()=> {setCategory(2);setSelect([2])} } className={`cursor-pointer py-1 px-2 ${select.includes(2) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Echange</div>
                <div onClick={()=> {setCategory(3);setSelect([3])} } className={`cursor-pointer py-1 px-2 ${select.includes(3) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Location pour vacances</div>
                <div onClick={()=> {setCategory(4);setSelect([4])} } className={`cursor-pointer py-1 px-2 ${select.includes(4) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Location</div>
                <div onClick={()=>{ setCategory(5);setSelect([1,2,3,4,5])} } className={`cursor-pointer py-1 px-2 ${select.includes(5) ? 'bg-sky text-white' : 'bg-white' } m-1 rounded-xl`}>Tous</div>
            </div>
        </FilterHolder>
    );
}

export default FilterCategory;



import React from 'react';
import FilterHolder from './FilterHolder';

function FilterType(props) {
    return (
        <FilterHolder title={"Type de bien"} subtitle={"Clicez sur le titre pour selectionner/deselectrioner toutes"}>
            <div className="flex flex-wrap">
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Apparetement</div>
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Maison</div>
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Villas</div>
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Locaux commerciaux</div>
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Bureaux</div>
                <div className='cursor-pointer py-1 px-2 bg-white m-1 rounded-xl'>Terrains</div>
            </div>
        </FilterHolder>
    );
}

export default FilterType;
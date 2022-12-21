import React from 'react';
import FilterHolder from './FilterHolder';
// import WILAYAS from "../../Assets/json/Wilayas.json" 

function FilterWilaya(props) {
    return (
        <>
            <FilterHolder title={"Wilayas"} subtitle={"choisissez la wilaya"} >
                <select className="select w-[80%] max-w-xs">
                    <option disabled selected>Wilayas</option>
                    {/* {
                        WILAYAS.map(w=><option>{w.code} - {w.nom}</option>)
                    } */}
                </select>
            </FilterHolder>
        </>
    );
}

export default FilterWilaya;
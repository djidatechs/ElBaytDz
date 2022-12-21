import React from 'react';
// import COMMUNES from "../../Assets/json/Communs.json"
import FilterHolder from './FilterHolder';

function FilterCommune(props) {
    return (
        <FilterHolder title={"Communes"} subtitle={"choisissez la cummunes"}>
        <select className="select  w-[80%] max-w-xs">
            <option disabled selected>Communes</option>
                    {/* {
                        COMMUNES.map(w=><option>{w.nom}</option>)
                    } */}
        </select>
    </FilterHolder>
    );
}

export default FilterCommune;
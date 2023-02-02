import React, { useEffect, useRef, useState } from 'react';
// import COMMUNES from "../../Assets/json/Communs.json"
import FilterHolder from './FilterHolder';
import { useElbaytFilters } from '../../pages/Catalog/CatalogContext';

function FilterCommune(props) {
    const { communeController, wilayaController} = useElbaytFilters();
    const  [commune, setCommune] = communeController
    const  [wilaya, setWilaya] = wilayaController
    const [communes , setCommunes] = useState([])
    const commune_id_ref = useRef(0)
    
    
    useEffect(()=>{

        if (wilaya.length){
        fetch("http://localhost:8000/communes?wilaya="+wilaya)
        .then(res=>res.json())
        .then(data=>{setCommunes(data.length ? data : [])})
        } 
        else {
            setCommunes([])
            setCommune("")
        }
    },[wilaya])
    
    const givecommune = ()=>{
        const commune_id = commune_id_ref.current.value
        setCommune(commune_id)
        

    }
    return (
        <FilterHolder title={"Communes"} subtitle={"choisissez la cummunes"}>
        <select ref={commune_id_ref} onChange={givecommune}  className="select  w-[80%] max-w-xs">
            <option  value={""} selected>Communes</option>
                {communes.length && communes.map(com=><option key={com.id} value={com.id}  >{com.name}</option>)}
        </select>
    </FilterHolder>
    );
}

export default FilterCommune;
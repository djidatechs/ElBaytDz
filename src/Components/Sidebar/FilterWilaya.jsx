import React, { useRef } from 'react';
import FilterHolder from './FilterHolder';
import { useElbaytFilters } from '../../pages/Catalog/CatalogContext';
import { useEffect } from 'react';
import { useState } from 'react';
// import WILAYAS from "../../Assets/json/Wilayas.json" 

function FilterWilaya(props) {
    const { wilayaController} = useElbaytFilters();
    const  [wilaya, setWilaya] = wilayaController
    const [wilayas , setWilayas] = useState([])
    const wilaya_id_ref = useRef(0)
    
    
    useEffect(()=>{
        fetch("http://localhost:8000/wilayas/all")
        .then(res=>res.json())
        .then(data=>setWilayas(data))
    },[])
    
    const giveWilaya = ()=>{
        const wilaya_id = wilaya_id_ref.current.value
        setWilaya(wilaya_id)
        

    }
    
    return (
        <>
            <FilterHolder title={"Wilayas"} subtitle={"choisissez la wilaya"} >
                <select ref={wilaya_id_ref} onChange={giveWilaya}  className="select w-[80%] max-w-xs">
                    <option value={""}  selected>Wilayas</option>
                    {
                    wilayas.map(wil=><option key={wil.id} value={wil.id}  >{wil.name}</option>)
                    }
                </select>
            </FilterHolder>
        </>
    );
}

export default FilterWilaya;
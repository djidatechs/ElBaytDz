import React, { useRef, useState } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import { useEffect } from 'react';

function Etape01 ({setStep , context}) {
    const [annonce , setAnnonce] = context
    const [wilayas , setWilayas] = useState([]);
    const [communes , setCommunes] = useState([]);
    const category_ref = useRef(0)
    const wilaya_id_ref = useRef(0)
    const commune_id_ref = useRef(0)
    const property_type_ref = useRef(0)
    const property_address_ref_lat = useRef(0)
    const property_address_ref_log = useRef(0)


    const getCommunes = () =>{
        const wilaya_id = wilaya_id_ref.current.value
        fetch("http://localhost:8000/communes?wilaya="+wilaya_id)
        .then(res=>res.json())
        .then(data=>{setCommunes(data.length ? data : [])})
    }
    
    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])
    useEffect(()=>{
        fetch("http://localhost:8000/wilayas/all")
        .then(res=>res.json())
        .then(data=>setWilayas(data))
    },[])

    const setContext = () => {
        var category = null;
        var property_type = property_type_ref.current.value
        var wilaya_id = parseInt (wilaya_id_ref.current.value) || 1
        var commune_id = parseInt (commune_id_ref.current.value) || 1
        var log = property_address_ref_log.current.value
        var lat = property_address_ref_lat.current.value
        
        var els = document.getElementsByName('radioetape1');
        for (var i=0;i<els.length;i++){
            if ( els[i].checked ) category = els[i].value
        }
        // category: str
        // property_type: str
        // surface: float
        // description: str
        // price: float
        // contact_phone: str
        // wilaya: int
        // commune: int
        // user: str
        // property_address: str
        // photos: List[UploadFile] = []
        const REALESTATE_PARAMS = {
            category : CategoryMatrix(category),
            property_type,
            surface : 0,
            description : "",
            price : 0,
            contact_phone : "",
            wilaya_id,
            user : "",
            commune_id,
            property_address : log+"T"+lat,
            photos : []
        }
        console.log(REALESTATE_PARAMS)
        setAnnonce({...REALESTATE_PARAMS})
        setStep(c=>c+1)

        


        
    }
    return (
    <ClientContainter Custumize='untilMd:text-center '>
        <div className='md:ml-[100px] lg:ml-[200px]'>

        <h1 className='text-3xl text-night font-semibold my-6 ' onClick={setContext}>Categorie de bien</h1>

        <div className='md:grid grid-cols-2 xl:grid-cols-3 gap-12  md:w-2/3  '>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px]">
                    <span className="label-text  font-bold text-left">Vente</span> 
                    <input type="radio" name='radioetape1' value={1}  defaultChecked className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Echange</span> 
                    <input type="radio" name='radioetape1' value={2}  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Location pour vacances</span> 
                    <input type="radio" name='radioetape1'  value={3} className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Location</span> 
                    <input type="radio" name='radioetape1' value={4}  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
          
           
        </div>

        <h1 className='text-3xl text-night font-semibold my-6 '>Type de bien</h1>

        <div className='md:grid grid-cols-2 xl:grid-cols-3 gap-12  md:w-2/3  '>
        <input ref={property_type_ref} type="text" placeholder="Type"  className="input input-bordered w-full" />
        
        </div>

        <h1 className='text-3xl text-night font-semibold my-6'>Emplacement</h1>

        <div className='md:grid grid-cols-2 untilMd:space-y-20'>
            <div className='space-y-10'>
            <select ref={wilaya_id_ref} onChange={getCommunes}  className="select select-bordered block w-full md:max-w-xs">
                <option disabled selected value={0}>Wilaya</option>
                {
                    wilayas.map(wil=><option key={wil.id} value={wil.id}  >{wil.name}</option>)
                }
            </select>
            <select ref={commune_id_ref} className="select select-bordered block w-full md:max-w-xs">
                <option disabled selected value={0}>Commune</option>
                {communes.length && communes.map(com=><option key={com.id} value={com.id}  >{com.name}</option>)}
            </select>
            </div>
            <div>
                <h1 className='text-3xl text-night font-semibold my-6 '>MAP : coordonnee</h1>
                <input ref={property_address_ref_log} type="text" placeholder="Lat"  className="input input-bordered w-full mb-2" />
                <input ref={property_address_ref_lat} type="text" placeholder="log"  className="input input-bordered w-full mb-2" />
                
            </div>
            </div>

        <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right mt-10' onClick={setContext}>Suivant</button>

        
        </div>
        </ClientContainter>

    )}
    

export default Etape01;


function CategoryMatrix  (number)  {
    console.log({number})
    let ret = ""
    switch (number) {
        case '1': ret = "Sale"
        break;
        case '2': ret = "Exchange"
        break;
        case '3': ret = "Vacation Rent"
        break;
        case '4': ret = "Rent"
        break;
    }
    return ret
}
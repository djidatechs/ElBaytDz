import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';

function Etape01 ({setStep}) {
    return (
    <ClientContainter Custumize='untilMd:text-center'>

        <h1 className='text-3xl text-night font-semibold my-6'>Type de bien</h1>

        <div className='md:grid grid-cols-2 gap-12 w-full md:w-2/3  '>
            <div className="form-control">
                <label className="label cursor-pointer w-[200px]">
                    <span className="label-text  font-bold text-left">Apparetement</span> 
                    <input type="checkbox" defaultChecked className="checkbox" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer w-[200px] ">
                    <span className="label-text  font-bold">Villas</span> 
                    <input type="checkbox" defaultChecked className="checkbox" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer w-[200px] ">
                    <span className="label-text  font-bold">Bureau</span> 
                    <input type="checkbox" defaultChecked className="checkbox" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer w-[200px] ">
                    <span className="label-text  font-bold">Locaux commerciaux</span> 
                    <input type="checkbox" defaultChecked className="checkbox" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer w-[200px] ">
                    <span className="label-text  font-bold">Terrains</span> 
                    <input type="checkbox" defaultChecked className="checkbox" />
                    
                </label>
            </div>
           
        </div>

        <h1 className='text-3xl text-night font-semibold my-6'>Emplacement</h1>

        <div className='grid grid-cols-2'>
            <div className='space-y-10'>
            <select className="select select-bordered block w-full max-w-xs">
                <option disabled selected>Wilaya</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select className="select select-bordered block w-full max-w-xs">
                <option disabled selected>Commune</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            </div>
        </div>

        <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={()=>setStep(c=>c+1)}>Suivant</button>

        </ClientContainter>
    )}
    

export default Etape01;
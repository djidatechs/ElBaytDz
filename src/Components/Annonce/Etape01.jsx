import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';

function Etape01 ({setStep}) {
    return (
    <ClientContainter Custumize='untilMd:text-center '>
        <div className='md:ml-[100px] lg:ml-[200px]'>

        <h1 className='text-3xl text-night font-semibold my-6 '>Categorie de bien</h1>

        <div className='md:grid grid-cols-2 xl:grid-cols-3 gap-12  md:w-2/3  '>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px]">
                    <span className="label-text  font-bold text-left">Vente</span> 
                    <input type="radio" name='radioetape1'  defaultChecked className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Echange</span> 
                    <input type="radio" name='radioetape1'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Location pour vacances</span> 
                    <input type="radio" name='radioetape1'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Location</span> 
                    <input type="radio" name='radioetape1'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
          
           
        </div>

        <h1 className='text-3xl text-night font-semibold my-6 '>Type de bien</h1>

        <div className='md:grid grid-cols-2 xl:grid-cols-3 gap-12  md:w-2/3  '>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px]">
                    <span className="label-text  font-bold text-left">Apparetement</span> 
                    <input type="radio" name='radioetape2'  defaultChecked className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Terrain Agricole</span> 
                    <input type="radio" name='radioetape2'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Terrains</span> 
                    <input type="radio" name='radioetape2'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Maisons</span> 
                    <input type="radio" name='radioetape2'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer md:w-[200px] ">
                    <span className="label-text  font-bold">Bungalow</span> 
                    <input type="radio" name='radioetape2'  className="checkbox bg-gray-300" />
                    
                </label>
            </div>
        
        </div>

        <h1 className='text-3xl text-night font-semibold my-6'>Emplacement</h1>

        <div className='md:grid grid-cols-2 untilMd:space-y-20'>
            <div className='space-y-10'>
            <select className="select select-bordered block w-full md:max-w-xs">
                <option disabled selected>Wilaya</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select className="select select-bordered block w-full md:max-w-xs">
                <option disabled selected>Commune</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            </div>
            <div className=' bg-gray-200 h-64 text-center '>MAP PLACE HOLDER</div>
        </div>

        <button className='py-2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right mt-10' onClick={()=>setStep(c=>c+1)}>Suivant</button>

        
        </div>
        </ClientContainter>

    )}
    

export default Etape01;
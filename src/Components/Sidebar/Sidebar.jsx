import React, { useState } from 'react';
import FilterType from './FilterType';
import FilterWilaya from './FilterWilaya';
import FilterTimePub from './FilterTimePub';
import FilterCommune from './FilterCommune';
import Model from '../Shared/Model';
import FilterCategory from './FilterCategory';


function Sidebar(props) {
    
    return (
        <Model>
            <div className=' overflow-y-auto  lg:m-6 pb-6 rounded-xl space-y-10'>
                <div className='bg-gray-200 text-night font-bold p-2 rounded-xl'>FILTRERS</div>
                <div className='bg-gray-200 text-night rounded-xl p-5 pl-7 pb-10  space-y-8'>
                    <FilterCategory/>
                    <FilterType/>
                    <FilterWilaya/> 
                    <FilterCommune/>
                    <FilterTimePub/>
                </div>
                
            </div>
        </Model>
    );
}

export default Sidebar;
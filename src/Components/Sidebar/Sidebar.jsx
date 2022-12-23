import React from 'react';
import FilterType from './FilterType';
import FilterWilaya from './FilterWilaya';
import FilterTimePub from './FilterTimePub';
import FilterCommune from './FilterCommune';
import Model from '../Shared/Model';

function Sidebar(props) {
    return (
        <Model>
            <div className=' overflow-y-auto  m-6 pb-6 rounded-xl text-center space-y-10'>
                <div className='bg-gray-200 text-night font-bold p-2 rounded-xl'>FILTRERS</div>
                <div className='bg-gray-200 text-night rounded-xl p-2 space-y-8'>
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
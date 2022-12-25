import React, { useEffect } from 'react';
import FilterHolder from './FilterHolder';

function FilterTimePub(props) {

    return (
        <div className='mb-5'>
       <FilterHolder title={"Période de publication"}>
            <div className='space-y-5'>
                <div className='space-y-2'>
                <h3>1ère Date</h3>
                <input className=' w-[80%] p-2' type={'date'}/>
                </div>
                
                <div className='space-y-2 '>
                <h3>2eme Date</h3>
                <input className=' w-[80%] p-2' type={'date'}/>
                </div>
            </div>

       </FilterHolder>
       </div>
    );
}

export default FilterTimePub;
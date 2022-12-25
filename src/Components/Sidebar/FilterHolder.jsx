import React from 'react';

function FilterHolder({title , subtitle , children}) {
    return (
        <div className='my-6'>
            <h1 className='text-left text-xl text-night font-bold '>{title}</h1>
            <h6 className='text-left text-sm text-night mb-4'>{subtitle}</h6>
           {children}
        </div>
    );
}

export default FilterHolder;
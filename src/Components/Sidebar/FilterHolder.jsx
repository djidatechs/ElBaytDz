import React from 'react';

function FilterHolder({title , subtitle , children}) {
    return (
        <div>
            <h1 className='text-night font-bold '>{title}</h1>
            <h6 className='text-night text-xs mb-4'>{subtitle}</h6>
           {children}
        </div>
    );
}

export default FilterHolder;
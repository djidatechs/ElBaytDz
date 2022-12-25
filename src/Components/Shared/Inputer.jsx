import React from 'react';

function Inputer(props) {
    return (
        <div className="mt-6 ">
                
            <div className=' text-center items-center '>
            <input type="text" placeholder="Recharcher une annonce" className="input input-bordered  sm:w-2/3 rounded-r-none " />
            <button className="btn m-0 align-bottom bg-night rounded-l-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            </div>
            
        </div>
    );
}

export default Inputer;
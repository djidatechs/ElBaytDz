import React from 'react';

function Paginator(props) {
    return (
        <div className="m-10 space-x-2 scale-">
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">«</button>
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 text-white rounded-xl  lg:font-bold hover:btn-sun bg-sky ">1</button>
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">2</button>
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 ">...</button>
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">12</button>
        <button className="inline p-2 text-sm md:text-lg lg:text-xl lg:p-3 border-4 bg-[#F8F8F8] rounded-xl  lg:font-bold hover:bg-sun text-[#666666]">»</button>
        </div>
    );
}

export default Paginator;
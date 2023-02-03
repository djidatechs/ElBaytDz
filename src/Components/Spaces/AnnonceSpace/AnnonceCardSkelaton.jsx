import React from 'react';

function AnnonceCardSkelaton({repeat=4}) {
    const fields = [];
        for (let i = 1; i <= repeat; i++) {
        fields.push(<Pulse/>);
    }

    return (
        <>
        {fields}
        </>
    );
}

export default AnnonceCardSkelaton;


const Pulse =()=> <button className={"card loading bg-gray-300  h-80 animate-pulse w-full select-none  relative  rounded-3xl rounded-tr-none  shadow-xl shadow-slate-500 md:hover:scale-[102%] transition duration-300 ease-out "}></button>



import React from 'react';

function ContactAnnoncer(props) {
    return (
        <div className=' mt-6 w-full p-4 ml-auto rounded-xl bg-night '>                   
            <div className='md:w-[80%] mx-auto py-5 space-y-10 '>
                <h1 className='text-center font-bold text-2xl text-white '>Contacter l'annonceur </h1>
                <input type="text" placeholder="Nom et prenom" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <input type="text" placeholder="Adress" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <input type="text" placeholder="Telephone" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <textarea style={{resize: "none"}} type="text" placeholder="Message" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block min-h-[200px] " />
                <button className="btn bg-sky w-full ">Envoyer</button>
            </div>
        </div>
    );
}

export default ContactAnnoncer;
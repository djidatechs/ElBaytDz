import React from 'react';
import illustration from '../../Assets/illustration.png'

function ContactFooter(props) {
    return (
        <div className='sm:grid grid-cols-2 mt-6'>
                
            <div className='space-y-6 text-left '>
            <p className='text-night font-bold text-3xl'>Contactez nous !</p>
            <input type="text" placeholder="Nom et prenom" className="input input-ghost bg-gray-100 shadow-lg shadow-slate-400 w-full md:max-w-md block" />
            <textarea style={{resize: "none"}} type="text" placeholder="Message" className="input input-ghost bg-slate-100 shadow-lg shadow-slate-400 w-full md:max-w-md block min-h-[200px] " />
            <button className="btn bg-night w-full md:max-w-xs">Envoyer</button>
            </div>

            <div className='w-full'><img src={illustration} alt="" className='ml-auto'/></div>
        </div>
    );
}

export default ContactFooter;
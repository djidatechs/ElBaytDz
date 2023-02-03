import React, { useRef } from 'react';
import { useElbayt } from '../../pages/Auth/AuthContext';
import axios from 'axios';

function ContactAnnoncer({realestate_id}) {
    const {name,email} = useElbayt()[0];
    const nameRef = useRef(0);
    const adressRef = useRef(0);
    const telephoneRef = useRef(0);
    const textRef = useRef(0);
    const submitter = useRef(0);
    
    const submit = async () =>{
        submitter.current.value = "Sending..."
        submitter.current.className = "btn bg-yellow-500 w-full animate-pulse";
        
        const object = {
         name : nameRef.current.value,
         adress : adressRef.current.value,
         phone : telephoneRef.current.value,
         text : textRef.current.value,
         email , 
         realestate_id
        }
        console.log(object)
        // Object = {
        //     text ,
        //     name , 
        //     adress , 
        //     phone , 
        //     email , 
        //     realestate_id , 
        // }
        
        const respones = await axios.post("http://localhost:8000/messages", {...object})
        if (respones?.data?.ok) {
            console.log("YEAH")
            submitter.current.value = "ENVOYER" 
            submitter.current.className = "btn bg-sky w-full";
            nameRef.current.value = ""
            adressRef.current.value = ""
            telephoneRef.current.value = ""
            textRef.current.value = ""
            
        }
        console.log({respones})

        
        

    }
    return (
        <div className=' mt-6 w-full p-4 ml-auto rounded-xl bg-night '>                   
            <div className='md:w-[80%] mx-auto py-5 space-y-10 '>
                <h1 className='text-center font-bold text-2xl text-white '>Contacter l'annonceur </h1>
                <input ref={nameRef} defaultValue={name} type="text" placeholder="Nom et prenom" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <input ref={adressRef} type="text" placeholder="Adress" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <input ref={telephoneRef} type="text" placeholder="Telephone" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block" />
                <textarea ref={textRef} style={{resize: "none"}} type="text" placeholder="Message" className="input input-ghost bg-white shadows-lg shadows-slate-400 w-full  block min-h-[200px] " />
                <button ref={submitter} className="btn bg-sky w-full " onClick={submit}>Envoyer</button>
            </div>
        </div>
    );
}

export default ContactAnnoncer;
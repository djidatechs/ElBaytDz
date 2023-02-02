import React, { useState } from 'react';
import BreadCrump from '../../../../Components/Annonce/BreadCrump';
import ClientContainter from '../../../../Layouts/Containers/ClientContainter';
import Inputer from '../../../../Components/Shared/Inputer';
import GeneralTable from '../../../../Components/Tables/GeneralTable';
import { useEffect } from 'react';


function Annonces(props) {
    const [TABLE_ , setTABLE_] = useState({ths:[] , rows:[]})
    const [dataTable , setDataTable] = useState([]);

    const addAdming = (id)=> {
        fetch(`http://localhost:8000/user/toadmin?id=${id}`, {method: 'PUT'})
         .then(response => response.json())
         .then(data => {} );
    }
    
    useEffect(()=>{
        fetch("http://localhost:8000/users")
        .then(res=>res.json())
        .then(data=> setDataTable(data) )
    },[])
   
    useEffect(()=>{
        let rows = []
        dataTable.map(element=>{
            let newElemnt = []
            console.log(element.email)
            newElemnt.push([element.email])
            if (element.role == "admin")
                newElemnt.push([ ()=>{}, "Admin"  ])
            else newElemnt.push([ addAdming(element.id) , "Ajouter admin"  ])        
            newElemnt.push([()=>{"Annonnces"},"Annonnces"])
            newElemnt.push([()=>{"Superimer"},"Superimer"])
            rows.push(newElemnt)
    
        })
        const TABLE = {
            ths : [
               
                {
                    title : 'Email', 
                    type : 'text',
                },
                {
                    title : 'Role', 
                    type : 'action',
                },
                {
                    title : 'Annonces', 
                    type : 'action',
                },
                {
                    title : 'Supprimer', 
                    type : 'action',
                },
            ],
            rows: rows
        }
        setTABLE_(current=>({...TABLE}))

    },[dataTable])
    
    return (
       <ClientContainter>
        <div className='sm:grid grid-cols-2 gap-10  sm:py-3'>
            <h1 className='font-bold text-xl text-night text-right '>Listes des utilisateurs </h1>
            <Inputer mt={"0"}/>
        </div>
        <GeneralTable TABLE={TABLE_}/>
       </ClientContainter>
    );
}

export default Annonces;
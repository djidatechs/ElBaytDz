import React from 'react';
import BreadCrump from '../../../../Components/Annonce/BreadCrump';
import ClientContainter from '../../../../Layouts/Containers/ClientContainter';
import Inputer from '../../../../Components/Shared/Inputer';
import GeneralTable from '../../../../Components/Tables/GeneralTable';
import Paginator from '../../../../Components/Shared/Paginator';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Annonces(props) {
    const [annonces , setAnnonces] = useState([])
    const [TABLE_ , setTABLE_] = useState({ths:[] , rows:[]})
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:8000/realestate?nophotos=yes&size=50")
          .then(res => res.json())
          .then(data => {
            let counter = 0;
            data.map(elem => {
              setTimeout(() => {
                fetch("http://localhost:8000/users/" + elem.user_id)
                  .then(res => res.json())
                  .then(user => {
                    elem.user = user.email;
                    counter++;
                    if (counter === data.length) {
                      setAnnonces(data);
                    }
                  });
              }, 0);
            });
          });
      }, []);

      useEffect(()=>{
        let rows = []
        annonces.map( (element)=>{
            
            let newElemnt = []
            console.log(element)
            newElemnt.push([element.property_type])
            newElemnt.push([element.user])
            console.log(element.user)
            newElemnt.push([()=>{navigate("/annonces/"+element.id)},"Voir"] )
            newElemnt.push([()=>{navigate("/annonces/"+element.id)},"Modifier"] )
            newElemnt.push([async()=>{axios.delete(`/realestate/${element.id}/remove`) },"Superimer"])
            rows = [...rows , newElemnt]

        })
        const TABLE = {
            ths : [
                {
                    title : 'type', 
                    type : 'text',
                },
                {
                    title : 'Creer par', 
                    type : 'text',
                },
                {
                    title : 'Voir', 
                    type : 'action',
                },
                {
                    title : 'Modifier', 
                    type : 'action',
                },
                {
                    title : 'Supprimer', 
                    type : 'action',
                },
            ],
            rows:  rows
        }
        setTABLE_(current=>({...TABLE}))
        

      },[annonces])
    return (
       <ClientContainter>
        <div className='sm:grid grid-cols-2 gap-10  sm:py-3'>
            <h1 className='font-bold text-xl text-night text-right '>Listes des annonces disponibles </h1>
            <Inputer mt={"0"}/>
        </div>
        <GeneralTable TABLE={TABLE_} AN/>
       </ClientContainter>
    );
}

export default Annonces;
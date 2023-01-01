import React from 'react';
import BreadCrump from '../../../../Components/Annonce/BreadCrump';
import ClientContainter from '../../../../Layouts/Containers/ClientContainter';
import Inputer from '../../../../Components/Shared/Inputer';
import GeneralTable from '../../../../Components/Tables/GeneralTable';
import Paginator from '../../../../Components/Shared/Paginator';

function Annonces(props) {
    const TABLE = {
        ths : [
            {
                title : 'Username', 
                type : 'user',
            },
            {
                title : 'Email', 
                type : 'text',
            },
            {
                title : 'Telephone', 
                type : 'text',
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
        rows:  [
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
            [["noImage","Djida Issam"],["ji_djida@esi.dz"],["0558713153"],[()=>{"Annonnces"},"Annonnces"],[()=>{"Superimer"},"Superimer"]],
          
            

        ]
    }
    return (
       <ClientContainter>
        <div className='sm:grid grid-cols-2 gap-10  sm:py-3'>
            <h1 className='font-bold text-xl text-night text-right '>Listes des utilisateurs </h1>
            <Inputer mt={"0"}/>
        </div>
        <GeneralTable TABLE={TABLE}/>
        <div className='text-center'>
            <Paginator/>
        </div>
       </ClientContainter>
    );
}

export default Annonces;
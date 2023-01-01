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
                title : 'Nom', 
                type : 'text',
            },
            {
                title : 'Type', 
                type : 'text',
            },
            {
                title : 'Creer par', 
                type : 'user',
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
        rows:  [
            [["F3 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F4 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
            [["F3 Boumardes"],["Maison"],["noImage","Djida Issam"],[()=>{"voir"},"Voir"],[()=>{"modifier"},"modifier"],[()=>{"Superimer"},"Superimer"]],
          
            

        ]
    }
    return (
       <ClientContainter>
        <div className='sm:grid grid-cols-2 gap-10  sm:py-3'>
            <h1 className='font-bold text-xl text-night text-right '>Listes des annonces disponibles </h1>
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
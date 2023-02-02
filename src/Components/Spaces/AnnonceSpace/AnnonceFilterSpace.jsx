import React, { useState } from 'react';
import AnnonceCard from './AnnonceCard';
import filtre from '../../../Assets/filtre.svg'
import Paginator from '../../Shared/Paginator';
import { useEffect } from 'react';
import { useElbaytFilters } from '../../../pages/Catalog/CatalogContext';

function AnnonceFilterSpace({DefaultFetch="" , context}) {

    const [annonces , setAnnonces] = useState([])
    const {pageController , categoryController ,typeController , wilayaController , communeController} = useElbaytFilters();

    // const [page, setPage] = useState(1);
    // const [category, setCategory] = useState(0);
    // const [type, setType] = useState(0);
    // const [wilaya, setWilaya] = useState(0);
    // const [commune, setCommune] = useState(0);


    const page     =  pageController      [0]
    const category =  categoryController  [0]
    const type     =  typeController      [0]
    const wilaya   =  wilayaController    [0]
    const commune  =  communeController   [0]

    
    useEffect(()=>{
        console.log(DefaultFetch+`page=${page}&category=${CategoryMatrix(category)}&property_type=${TypeAMatrix(type)}&wilaya=${wilaya}&commune=${commune}`)
        fetch(DefaultFetch+`page=${page}&category=${CategoryMatrix(category)}&property_type=${TypeAMatrix(type)}&wilaya=${wilaya}&commune=${commune}`)
        .then(response => response.json())
        .then(data => setAnnonces(data))
    },[page , category , type , wilaya , commune])

    return (
        <div className='mx-auto md:p-6 '>
            <div className='space-x-5 mb-2 text-center mx-auto text-night font-bold'>
                <img src={filtre} alt="" className='w-8 h-8 inline' />
                <h1 className='text-xl md:text-3xl inline'>Filtrer toutes les annonces</h1>
            </div>
            <div className='space-x-5 mb-6 text-center mx-auto'>
                <h1 className='text-lg md:text-xl inline'><b>336 biens</b> immobiliers: trouvez l'appartement ou la maison de vos rêves !</h1>
            </div>
            <div className="md:grid grid-cols-2 gap-6 untilMd:space-y-10">
                {           
                    !annonces.length
                    ? <></>
                    :
                    annonces.map(annonce=>(
                    <AnnonceCard
                    Category={annonce.category}
                    Desc={annonce.description}
                    Price={annonce.price}
                    Surface={annonce.surface}
                    Type={annonce.property_type}
                    key={annonce.id}
                    id={annonce.id}
                    />
                    ))
                }
            </div>
             <div className='text-center'>
                    <Paginator />
                </div>
        </div>
    );
}

export default AnnonceFilterSpace;



function CategoryMatrix  (number)  {
    
    let ret = ""
    number = number.toString()
    console.log({number})
    switch (number) {
        case '1': ret = "Sale"
        break;
        case '2': ret = "Exchange"
        break;
        case '3': ret = "Vacation Rent"
        break;
        case '4': ret = "Rent"
        break;
        default : ret = ""
    }
    console.log({ret})
    return ret
}




function TypeAMatrix  (number)  {
    
    let ret = ""
    number = number.toString()
    console.log({number})
    switch (number) {
        case '1': ret = "Apparetement"
        break;
        case '2': ret = "Maison"
        break;
        case '3': ret = "Terrain Agricole"
        break;
        case '4': ret = "Bungalow"
        break;
        case '5': ret = "Terrains"
        break;
        default : ret = ""
    }
    console.log({ret})
    return ret
}
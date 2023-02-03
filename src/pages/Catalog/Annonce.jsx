import React , {useEffect, useState} from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import BreadCrump from '../../Components/Annonce/BreadCrump';
import illustration from '../../Assets/illustration.png'
import Caroussel from '../../Components/Annonce/Caroussel';
import FavHeart from '../../Assets/FavHeart.svg'
import DescIcon from '../../Assets/DescIcon.svg'
import ContactAnnoncer from '../../Components/Annonce/ContactAnnoncer';
import { useParams } from 'react-router-dom';
import Map from '../../Components/Annonce/Map';
import CategoryMatrixFr from '../../Assets/js/CategoryMatrix';

function Catalog(props) {
    const [annonce , setAnnonce] = useState(null);
    const {annonceId} = useParams();
    const [loading , setLoading] = useState(true);
    const [map , setMap] = useState({lat:0,log:0})
    const [place, setPlace]= useState(['','']);
    const [loaded , setLoaded] = useState(false);


    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
        fetch(`http://localhost:8000/realestate/${annonceId}`)
        .then(response => response.json())
        .then(data => {
            setAnnonce(data);
            setMap({
                lat:data.property_address.split('T')[0],
                log:data.property_address.split('T')[1],
            });
            setLoading(false);
            setLoaded(current=>!current)
        })
        console.log(annonce)
    },[])

    useEffect(()=>{
        if (loaded) {
            fetch(`http://localhost:8000/wilayascommune?communeID=${annonce.commune_id}`)
            .then(response => response.json())
            .then(data => setPlace(current=>[ data.wilaya , data.commune  ]))

            
        }

    },[loaded])

    if (loading) return (
        <>
            <BreadCrump text={"Annonces ❯ "+annonceId}/>  {/* Client contained */}
            <ClientContainter>
                <div className='text-center w-full text-night font-bold text-2xl '>Attendez svp ...</div>
                <div className='md:grid grid-cols-2 gap-10 p-10 mt-10'>
                    <div className='bg-night opacity-50 animate-pulse h-[90vh]'></div>
                    <div className='bg-sky opacity-50 animate-pulse h-[90vh]'></div>
                </div>
            </ClientContainter>
        </>
    )
    if (annonce == null ) return <BreadCrump text={"Annonces ❯ "}/> 
    return (
        
        <div>
            <BreadCrump text={"Annonces ❯ F3 Boumardes"}/>  {/* Client contained */}
            <ClientContainter>
                <div className='lg:flex'>
                    <div className='w-full lg:w-7/12 '>
                        <div className=' mt-8 space-y-3'>
                            <h1 className=' text-left font-bold text-2xl text-night '>{annonce.property_type} </h1>
                            <h1 className=' text-left font-bold text-2xl text-sky '>Categorie : {CategoryMatrixFr(annonce.category)} </h1>
                            <h1 className=' text-left font-bold text-2xl text-sun '>{annonce.price} Da </h1>
                            <h1 className=' text-left font-bold text-2xl text-slate-700 '> {place[0]} | {place[1]} </h1>
                            <div className='space-x-3'>
                                <div className="badge badge-outline text-night">{annonce.surface} m^3</div>
                            </div>
                            <div className='space-x-3'>
                                <img src={FavHeart} className="inline w-8 h-8" alt="" />
                                <h2 className='font-bold text-2xl inline text-night'>Ajouter à vos favoris</h2>
                            </div>
                            <div className='lg:mr-8'>
                                <Caroussel photos={annonce?.encoded_photos ||[] } />
                            </div>

                           
                            <div className='space-x-3 lg:mr-8'>
                                <img src={DescIcon} className="inline w-8 h-8 " alt="" />
                                <h2 className='font-bold text-2xl inline '>Description complète</h2>
                                <article className="text-lg lg:text-xl ">
                                    <p>{annonce.description}</p>
                                    
                                    
                                    </article>
                            </div>
                            <div className='space-x-3 lg:mr-8 h-[300px]'>
                                <Map lat={{current:{}}} log={{current:{}}} set={{lat:map.lat,lng:map.log}} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 '>
                        <div className='mt-8'>
                            <ContactAnnoncer realestate_id={annonceId}  />
                        </div>
                    </div>
                </div>
            </ClientContainter>
        
        </div>
    
    );
}

export default Catalog;
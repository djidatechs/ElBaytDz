import React , {useEffect} from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import BreadCrump from '../../Components/Annonce/BreadCrump';
import illustration from '../../Assets/illustration.png'
import Caroussel from '../../Components/Annonce/Caroussel';
import FavHeart from '../../Assets/FavHeart.svg'
import DescIcon from '../../Assets/DescIcon.svg'
import ContactAnnoncer from '../../Components/Annonce/ContactAnnoncer';

function Catalog(props) {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    return (
        
        <div>
            <BreadCrump text={"Annonces ❯ F3 Boumardes"}/>  {/* Client contained */}
            <ClientContainter>
                <div className='lg:flex'>
                    <div className='w-full lg:w-7/12 '>
                        <div className=' mt-8 space-y-3'>
                            <h1 className=' text-left font-bold text-2xl text-night '>F3 Boumerdes </h1>
                            <h1 className=' text-left font-bold text-2xl text-sun '>190 000 Da </h1>
                            <h1 className=' text-left font-bold text-2xl text-slate-700 '>Boumerdes</h1>
                            <div className='space-x-3'>
                                <div className="badge badge-outline text-night">111 m^3</div>
                                <div className="badge badge-outline text-night">3 Chambres</div>
                                <div className="badge badge-outline text-night">1er etage</div>
                            </div>
                            <div className='space-x-3'>
                                <img src={FavHeart} className="inline w-8 h-8" alt="" />
                                <h2 className='font-bold text-2xl inline text-night'>Ajouter à vos favoris</h2>
                            </div>
                            <div className='lg:mr-8'>
                                <Caroussel/>
                            </div>

                           
                            <div className='space-x-3 lg:mr-8'>
                                <img src={DescIcon} className="inline w-8 h-8 " alt="" />
                                <h2 className='font-bold text-2xl inline '>Description complète</h2>
                                <article className="text-lg lg:text-xl ">
                                    <p>
                                    Particulier vend un très bel appartement de 111M2 avec un lot des parties communes de 14M2.
                                    Il est situé au Bd Krim Belcacem, 1er étage avec 3 chambres, 1 salon, une cuisine, une salle de bain et des toilettes séparés.
                                    Ce bien (avec livret foncier) est d’un bon état et conviendrait à une habitation ou à une profession libérale.
                                    Il sera disponible à partir 1er décembre.
                                    </p>
                                    <p>Prix : 19.500 000DA</p>
                                    <p>email : rachidouzegane@yahoo.com</p>
                                    
                                    
                                    </article>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 '>
                        <div className='mt-8'>
                            <ContactAnnoncer/>
                        </div>
                    </div>
                </div>
            </ClientContainter>
        
        </div>
    
    );
}

export default Catalog;
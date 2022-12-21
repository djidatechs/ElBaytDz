import React from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import PresentationCover2 from '../../Components/Shared/PresentationCover2';
import AnnonceCard from '../../Components/Spaces/AnnonceSpace/AnnonceCard';
import filtre from '../../Assets/filtre.svg'

import FilterType from '../../Components/Sidebar/FilterType';
import FilterWilaya from '../../Components/Sidebar/FilterWilaya';
import FilterTimePub from '../../Components/Sidebar/FilterTimePub';
import FilterCommune from '../../Components/Sidebar/FilterCommune';
import Model from '../../Components/Shared/Model';
function Catalog(props) {
    return (
        <div className= ''>
            
            <label htmlFor="my-modal-6" className="fixed bottom-9 left-9 z-50 lg:hidden">
            <p className='text-center py-2 px-4 text-lg font-semibold bg-sky  text-white  rounded-xl'>Ouvrir filters</p>
            </label>
            
        <ClientContainter LayoutBackground='' CustumizeOverRide='w-full'>
            <PresentationCover2/>
        </ClientContainter>

        <ClientContainter LayoutBackground='' Custumize='flex overflow-y-auto mt-5 py-5'>
            <div className="lg:w-1/3">
                <Model>
                    <div className=' overflow-y-auto  m-6 pb-6 rounded-xl text-center space-y-10'>
                        <div className='bg-gray-200 text-night font-bold p-2 rounded-xl'>FILTRERS</div>
                        <div className='bg-gray-200 text-night rounded-xl p-2 space-y-8'>
                            <FilterType/>
                            <FilterWilaya/>
                            <FilterCommune/>
                            <FilterTimePub/>
                        </div>
                        
                    </div>
                </Model>
            </div>
            <div className="w-2/3 untilLg:w-full ">
                <div className='mx-auto md:p-6 '>
                    <div className='space-x-5 mb-2 text-center mx-auto text-night font-bold'>
                        <img src={filtre} alt="" className='w-8 h-8 inline' />
                        <h1 className='text-xl md:text-3xl inline'>Filtrer toutes les annonces</h1>
                    </div>
                    <div className='space-x-5 mb-6 text-center mx-auto'>
                        <h1 className='text-lg md:text-xl inline'><b>336 biens</b> immobiliers: trouvez l'appartement ou la maison de vos rêves !</h1>
                    </div>
                    <div className="md:grid grid-cols-2 gap-6 untilMd:space-y-10">
                        <AnnonceCard />
                        <AnnonceCard />
                        <AnnonceCard />
                        <AnnonceCard />
                    </div>
                </div>
            </div>
        </ClientContainter>
    </div>
    );
}

export default Catalog;
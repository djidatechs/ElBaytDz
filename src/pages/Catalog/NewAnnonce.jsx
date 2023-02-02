import React, { useEffect, useState } from 'react';
import Steps from '../../Components/Annonce/Steps';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import Etape01 from '../../Components/Annonce/Etape01';
import Etape02 from '../../Components/Annonce/Etape02';
import Etape03 from '../../Components/Annonce/Etape03';
import EtapeCbn from '../../Components/Annonce/EtapeCbn';

function NewAnnonce(props) {
    const REALESTATE_PARAMS = {
        category : "",
        property_type : "",
        surface : 0,
        description : "",
        price : 0,
        contact_phone : "",
        wilaya_id : "",
        user_id : "",
        commune_id : "",
        property_address : "",
    }
    const [annonce , setAnnonce] = useState({...REALESTATE_PARAMS});
    const [step , setStep] = useState(0);
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    
    return (
        <div>
            <Steps step={step}/>
            {
                step%4 == 0
                ? <Etape01 setStep={setStep} context={[annonce , setAnnonce]}/>
                : step%4 == 1
                ? <Etape02 setStep={setStep} context={[annonce , setAnnonce]}/>
                : step%4 == 2
                ? <Etape03 setStep={setStep} context={[annonce , setAnnonce]}/>
                : step%4 ==3
                ? <EtapeCbn setStep={setStep} context={[annonce , setAnnonce]}/>
                : <>Erreur</>
            }
        </div>
    );
}

export default NewAnnonce;
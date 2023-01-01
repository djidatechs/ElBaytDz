import React, { useEffect, useState } from 'react';
import Steps from '../../Components/Annonce/Steps';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import Etape01 from '../../Components/Annonce/Etape01';
import Etape02 from '../../Components/Annonce/Etape02';
import Etape03 from '../../Components/Annonce/Etape03';
import EtapeCbn from '../../Components/Annonce/EtapeCbn';

function NewAnnonce(props) {
    const [annonce , setAnnonce] = useState({});
    const [step , setStep] = useState(0);
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    
    return (
        <div>
            <Steps step={step}/>
            {
                step%4 == 0
                ? <Etape01 setStep={setStep}/>
                : step%4 == 1
                ? <Etape02 setStep={setStep}/>
                : step%4 == 2
                ? <Etape03 setStep={setStep}/>
                : step%4 ==3
                ? <EtapeCbn setStep={setStep}/>
                : <>Erreur</>
            }
        </div>
    );
}

export default NewAnnonce;
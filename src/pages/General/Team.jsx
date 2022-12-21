import React ,{useEffect} from 'react';

function Team(props) {
    useEffect(()=>{
        window.scrollTo({top:0 , behavior: 'smooth'})
    },[])
    return (
        <div>
            Team 
        </div>
    );
}

export default Team;
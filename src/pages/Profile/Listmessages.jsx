import React, { useEffect, useState } from 'react';
import { useElbayt } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';

function Listmessages(props) {
    const [messages , setMessages] = useState([])
    const [loading , setLoading] = useState()
    const {email} = useElbayt()[0]

    useEffect(() => {
        fetch(`https://elbayt-backend.onrender.com/me?email=${email}`)
        .then(res => res.json())
        .then(data => {
            fetch(`https://elbayt-backend.onrender.com/messages?sender_id=${data.id}`)
            .then(res => res.json())
            .then(msgs => {
                setMessages(msgs);
                console.log(msgs);
            })
            .catch(error => console.error(error));
        })
        .catch(error => console.error(error));
    }, []);
    // text
    // name
    // adress
    // phone
    // email
    // realestate_id
    // sender_id
    // recipient_id
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full z-0">
    
    <thead>
      <tr>
        <th>Nom & prenom</th>
        <th>email</th>
        <th>adress</th>
        <th>telephone</th>
        <th>Pour l'annonce</th>
        <th>message</th>

        

        
      </tr>
    </thead>
    <tbody>
     {
        !messages.length
        ? <></>
        : messages.map((msg,i)=>
            ( 
            <tr key={i}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.adress}</td>
              
                <td>{msg.phone}</td>
                <td className='cursor-pointer'><Link className='underline' to={`/annonces/${msg.realestate_id}`}>voir</Link></td>
                <td>{msg.text}</td>
            </tr>
              ))}
    </tbody>
  </table>
</div>
    );
}

export default Listmessages;
import React, { createContext, useState, useEffect, useContext } from 'react';

export const Elbayt = createContext()


export const useElbayt = () => {
    const ElbaytClient = useContext(Elbayt)
    return ElbaytClient
}



export  function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    useEffect(()=>{
      let user_info = localStorage.getItem("user_info")
      user_info = JSON.parse(user_info)
      console.log({user_information : user_info})
      if (user_info?.id) setUser(curr => ({...user_info}))
      

  },[])
    return (
      <Elbayt.Provider value={[user, setUser]}>
        {children}
      </Elbayt.Provider>
    );
  }
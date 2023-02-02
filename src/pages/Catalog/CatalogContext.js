import React, { createContext, useState, useEffect, useContext } from 'react';

export const ElbaytFilters = createContext()


export const useElbaytFilters = () => {
    const ElbaytClient = useContext(ElbaytFilters)
    return ElbaytClient
}



export  function ElbaytFiltersProvider({ children }) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [wilaya, setWilaya] = useState("");
    const [commune, setCommune] = useState("");
    
    const Controller = {
      pageController :  [page, setPage], 
      categoryController : [category, setCategory],
      typeController : [type, setType], 
      wilayaController:[wilaya, setWilaya],
      communeController:[commune, setCommune], 

    }



    useEffect(()=>{
  },[])
    return (
      <ElbaytFilters.Provider value={Controller}>
        {children}
      </ElbaytFilters.Provider>
    );
  }
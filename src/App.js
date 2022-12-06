import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "./Routes/Admin";
import Client from "./Routes/Client";



export default function App() {
  useEffect(() => {
    document.title = 'ElbaytDz 2022';
  }, []);
  return (
    <Routes>
      <Route path="/*" element={<Client/>} />
      <Route path="/admin/*" element={<Admin/>} />
    </Routes>
  )
}

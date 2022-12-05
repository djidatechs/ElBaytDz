import { Route, Routes } from "react-router-dom";

import Admin from "./Routes/Admin";
import Client from "./Routes/Client";



export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Client/>} />
      <Route path="/admin/*" element={<Admin/>} />
    </Routes>
  )
}

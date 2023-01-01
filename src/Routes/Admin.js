import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from '../pages/Admin/Auth/Auth';
import Signup from '../pages/Admin/Auth/Signup';
import NewAnnonce from '../pages/Admin/Dashboard/Annonces/NewAnnonce';
import UserList from '../pages/Admin/Dashboard/Users/UserList';
import AdminLayout from "../Layouts/Admin/AdminApp/AdminLayout";
import Annonces from '../pages/Admin/Dashboard/Annonces/Annonces';
import Annonce from '../pages/Admin/Dashboard/Annonces/Annonce';
import NoMatch from '../Error404';
import Scrapped from '../pages/Admin/Dashboard/Annonces/Scrapped';


function Admin(props) {
    return (
        <Routes>
            <Route path="signup" element={<Signup/>} />
        <Route  element={<AdminLayout/>}>

            <Route index element={<Navigate to={"dashboard"}/>}/>
            <Route element={<Auth/>}>
                <Route path="dashboard">
                    <Route  >
                        <Route index  element={<Annonces />} />
                        <Route path=':annonceId' element={<Annonce/>} />
                        <Route path="new" element={<NewAnnonce />} />
                        <Route path="scrapped" element={<Scrapped/>}/>
                    </Route>
                    <Route path="users">
                        <Route index element={<UserList />} />
                        {/* <Route path="aboutus" element={<idk />} /> */}
                    </Route>
                </Route>
            </Route>

        </Route>
        <Route path="*" element={<NoMatch />} />
        </Routes>
    );
}

export default Admin;
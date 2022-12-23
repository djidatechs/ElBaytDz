import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from '../Error404';
import ClientLayout from "../Layouts/Client/ClientApp/ClientLayout";
import Auth from "../pages/Auth/Auth";
import Signup from "../pages/Auth/Signup";
import Annonce from "../pages/Catalog/Annonce";
import Catalog from "../pages/Catalog/Catalog";
import AboutUs from "../pages/General/AboutUs";
import Home from "../pages/General/Home";
import Team from "../pages/General/Team";
import Profile from "../pages/Profile/Profile";
import ProfileLayout from '../Layouts/Client/Profile/ProfileLayout';
import Favoris from '../pages/Profile/Favoris';
import Offers from '../pages/Profile/Offers';



function Client(props) {
    return (
       <Routes>
        <Route  element={<ClientLayout/>}>

            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="team" element={<Team/>} />
            <Route path="signup" element={<Signup/>} />

            <Route element={<Auth/>}>

                <Route path="annonces">
                <Route index element={<Catalog />} />
                <Route path=":annonceId" element={<Annonce />} />
                </Route>
                
                <Route path="profile" element={<ProfileLayout/>}>
                <Route index element={<Profile />} />
                <Route path="favoris" element={<Favoris />} />
                <Route path="offers" element={<Offers />} />
                </Route>
            </Route>

        </Route>
        <Route path="*" element={<NoMatch />} />
       </Routes>
    );
}

export default Client;
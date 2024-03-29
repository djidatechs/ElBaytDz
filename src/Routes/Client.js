import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from '../Error404';
import ClientLayout from "../Layouts/Client/ClientApp/ClientLayout";
import Auth from "../pages/Auth/Auth";
import Signup from "../pages/Auth/Signup";
import Annonce from "../pages/Catalog/Annonce";
import NewAnnonce from "../pages/Catalog/NewAnnonce";
import Catalog from "../pages/Catalog/Catalog";
import AboutUs from "../pages/General/AboutUs";
import Home from "../pages/General/Home";
import Team from "../pages/General/Team";
import Profile from "../pages/Profile/Profile";
import ProfileLayout from '../Layouts/Client/Profile/ProfileLayout';
import Favoris from '../pages/Profile/Favoris';
import Offers from '../pages/Profile/Offers';
import { ElbaytFiltersProvider } from '../pages/Catalog/CatalogContext';
import Swagger from '../pages/General/Swagger';




function Client(props) {
    return (
       <Routes>
        <Route path="signup" element={<Signup/>} />
        <Route path='docs' element={<Swagger/>}/>
        <Route  element={<ClientLayout/>}>

            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="team" element={<Team/>} />

            <Route element={<Auth/>}>

                <Route path="annonces">
                <Route index element={ <ElbaytFiltersProvider><Catalog/></ElbaytFiltersProvider>} />
                <Route path=":annonceId" element={<Annonce />} />
                <Route path="new" element={<NewAnnonce />} />
                
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
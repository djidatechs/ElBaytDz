import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../Assets/img1.png'
import Logosignup from '../../Assets/Logosignup.svg'
import google from "../../Assets/google.svg"
import axios from "axios";
import { Navigate, useLocation } from 'react-router-dom';
import { useElbayt } from './AuthContext';




function Signup() {
    const ImageRef = useRef(0);
    
    const location = useLocation()
    const [accessToken, setAccessToken] = useState(null);
    const [user , setUser] = useElbayt();
    const [transformater , setTransformater] = useState(false)
    const handleLogin = () => {
        localStorage.removeItem("access_token")
        window.location.href ="https://accounts.google.com/o/oauth2/v2/auth?scope=email+profile+https://www.googleapis.com/auth/userinfo.profile&redirect_uri=http://localhost:3000/signup&response_type=code&client_id=577253181136-vsp9pem3lhc62r9oajr579c9p1ihpokr.apps.googleusercontent.com"
  };

    useEffect(() => {
        const handleCallback = async () => {
          const searchParams = new URLSearchParams(window.location.search);
          const code = searchParams.get("code");
          if (!code) {
            const error = searchParams.get("error");
            if (error === "access_denied") {
            } else {
            }
            return;
            }
            if (code) setTransformater(true)
    
          const response = await axios.post("http://localhost:8000/google-oauth", {code, redirect_uri: "http://localhost:3000/signup",});
          const accessToken = response.data.access_token;
          const userinfo =  response.data.user_info;
          if (userinfo.id != undefined) setUser(userinfo)
          localStorage.setItem("access_token", accessToken);
          localStorage.setItem("user_info", JSON.stringify(userinfo));          


          
        };
        
        if (user.id == undefined ) handleCallback();
        
        
      }, []);
   if (user.id) return <Navigate to={"/annonces"} />
    return (
        <div className=" relative z-20">
        <figure className='bg-sky ' onClick={()=>{console.log(user)}}><img ref={ImageRef} src={img1} className="w-full h-[60vh] brightness-50" /></figure>
        <div className="absolute text-white top-1/3 md:top-10  left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2">
            <img src={Logosignup} className={"w-80 "} alt="" />
        </div>
        <div className="absolute text-white  left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=' w-96 bg-transparent rounded-xl drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)]  '>
                <div className='bg-night rounded-t-xl text-2xl font-bold p-2 text-center'>Se connecter</div>
                <div className='bg-white rounded-b-xl pt-10'>
                    <h3 className='text-center text-night font-semibold text-lg'>Connectez-vous à votre compte</h3>
                    <div className=' py-10   text-center '>
                       { 
                       transformater==true ? (
                        <div   className='border-night space-x-3 cursor-pointer   text-night border-2 mx-10 rounded-xl p-3 animate-pulse'>
                        <h3 className='inline font-bold '>S'il vous plaît, attendez ....</h3>
                        </div>
                       ):(
                       <div onClick={()=>handleLogin()}  className='border-night space-x-3 cursor-pointer   text-night border-2 mx-10 rounded-xl p-3 hover:bg-night hover:text-white transition duration-300 ease-out'>
                        <img src={google} className="inline" alt="" />
                        <h3 className='inline font-bold '>Google</h3>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;



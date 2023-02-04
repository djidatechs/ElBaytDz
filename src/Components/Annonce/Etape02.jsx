import React, { useEffect } from 'react';
import ClientContainter from '../../Layouts/Containers/ClientContainter';
import addpic from "../../Assets/addPic.svg"
import { useRef } from 'react';
import { useState } from 'react';

function Etape02 ({setStep, context}) {
    const [annonce , setAnnonce] = context
    const [images , setImages] = useState([])
    const surface_ref = useRef(0)
    const price_ref = useRef(0)
    const img = useRef(0)

    const handleFileChange =(e)=>{
        console.log(e.target.files)
        setImages(e.target.files)
    }
    useEffect(()=>{
        if (images.length){
            
        }
    },[images])
    
    const setCOntext = () => {
        const price = price_ref.current.value
        const surface = surface_ref.current.value
        setAnnonce(
            current=>{
                current.price = parseFloat(price) || 0
                current.surface = parseFloat(surface) || 0
            
                const imageData = [];
                for (let i = 0; i < images.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(images[i]);
                reader.onload = async function() {
                    const image = new Image();
                    image.src = reader.result;
                    const maxSize = 500 * 1024; // 500 KB
                    let imageDataUrl = await readAsDataURL(images[i]);
                    let imageBlob = dataURLtoBlob(imageDataUrl);
                    let imageSize = imageBlob.size;

                    while (imageSize > maxSize) {
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    canvas.width = canvas.height = Math.sqrt(imageSize * maxSize / 4);
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                    imageDataUrl = canvas.toDataURL("image/jpeg", 0.7);
                    imageBlob = dataURLtoBlob(imageDataUrl);
                    imageSize = imageBlob.size;
                    }

                    imageData.push(imageDataUrl.split(",")[1]);
                };
                }
                
                current.photos = imageData 
                console.log({photo: current.photos})
                
                return current
            }
        )
        setStep(c=>c+1)

    }

    useEffect(()=>{window.scrollTo({top:0 , behavior: 'smooth'})},[])


    return (
        <ClientContainter Custumize='untilMd:text-center '>
        {/* TODO */}
        <div className='sm:grid grid-cols-2 lg:grid-cols-3 gap-6 md:ml-[100px] lg:ml-[200px] '>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Surface de bien en metre cube</h1>
                <input ref={surface_ref} type="text" placeholder="Type here" className="input selenium_surface  input-bordered w-full max-w-xs" />
            </div>
            <div>
                <h1 className='text-xl text-night font-semibold my-6 '>Prix de bien en dinar algerien</h1>
                <input ref={price_ref} type="text" placeholder="Type here" className="input selenium_price input-bordered w-full max-w-xs" />
            </div>
            <div className='col-span-2'>
                <h1 className='text-xl text-night font-semibold mt-6 '>Photos de bien</h1>
                <h2 className='ml-5'>Vous avez besoin de joindre des photos claires pour votre annonce</h2>
                <h2 className='ml-5'>01 photo en moins</h2>
                <img src={addpic} alt="" onClick={()=>{img.current.click()}}  className='cursor-pointer'/>
                <input ref={img} type="file" accept="image/*" multiple="multiple" className='hidden selenium_images' onChange={(e)=>handleFileChange(e)} />
            </div>
        
        </div>
       <button className='py-2 selenium_btn2 px-10 text-lg font-semibold text-white bg-sky rounded-xl float-right' onClick={setCOntext}>Suivant</button>
        </ClientContainter>
    )}
    

export default Etape02;




function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  }
  
  function dataURLtoBlob(dataURL) {
    let binary = atob(dataURL.split(",")[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
  }
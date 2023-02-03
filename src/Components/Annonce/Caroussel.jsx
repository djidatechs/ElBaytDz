import React from 'react';

function Caroussel({photos}) {
    return (
        <div className="carousel w-full rounded-xl">
            {
                !photos.length ? (
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/400/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                            <a href="#slide2" className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                        </div>
                    </div>
                ):(
                    photos.map((photo,index)=>{
                        const id = index+1
                        const topId = (photos.length - id +1) 
                        return (
                        <div id={"slide"+id} className="carousel-item relative w-full">
                            <img src={`data:image/jpeg;base64,${photo.data}`} className="w-full max-h-[300px]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={"#slide"+topId} className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                                <a href={"#slide"+id} className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                            </div>
                        </div> 
                        )})
                )
            }
        </div>

    );
}

export default Caroussel;
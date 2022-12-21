import React from 'react';

function Caroussel(props) {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/400/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                <a href="#slide2" className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/400/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                <a href="#slide3" className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/400/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                <a href="#slide4" className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/400/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle text-night hover:text-white bg-white">❮</a> 
                <a href="#slide1" className="btn btn-circle text-night hover:text-white bg-white">❯</a>
                </div>
            </div>
        </div>

    );
}

export default Caroussel;
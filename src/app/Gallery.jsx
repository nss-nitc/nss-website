"use client";

import React, { useState } from "react";


const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
  ];



const Gallery = () => {
    const [index,setIndex] = useState(0);
    const [isSliding,setIsSliding] = useState(false);

    console.log(index)

    const prevClick = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsSliding(false);
        }, 300);
    };

    const nextClick = () => {
        console.log("hello");
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            console.log("hi");
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex +1
            );
            setIsSliding(false);
        }, 300);
    };

    

      return (
        <div className="bg-gray-100 flex flex-col items-center py-8 px-4">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 font-poppins md:text-5xl">Gallery</h2>
          <div className="flex flex-row justify-center items-center space-x-4">
            {/* Navigation Buttons */}
            <button
              onClick={prevClick}
              className= "rounded-full p-2"
            >
            <svg className="h-7 w-7 md:h-12 md:w-12 sm:h-10 sm:w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                <path fill="#1e293b" d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 26.470703 13.986328 A 1.50015 1.50015 0 0 0 25.439453 14.439453 L 17.439453 22.439453 A 1.50015 1.50015 0 0 0 17.439453 24.560547 L 25.439453 32.560547 A 1.50015 1.50015 0 1 0 27.560547 30.439453 L 20.621094 23.5 L 27.560547 16.560547 A 1.50015 1.50015 0 0 0 26.470703 13.986328 z"></path>
            </svg>
            </button>
          <div className="bg-[#AFE1E1] relative w-full max-w-3xl overflow-hidden border border-slate-950 rounded-xl min-w-56">
            <div>
                {/* Image Slider */}
                <div
                className={`flex transition-transform duration-300 ease-in-out`}
                style={{
                    transform: `translateX(-${index * 100}%)`, // change to shift images
                    display: "flex",
                // width: `${images.length * 100}%`, // make sure the container width is correct
                }}
                >
                    {images.map((image, i) => (
                        <img
                        key={i}
                        src={image}
                        alt={`Slide ${i}`}
                        className="w-full flex-shrink-0 object-cover rounded-md"
                        />
                    ))}
                </div>
            <p className="p-1">
                
            </p>
            </div>
            
          </div>
          <button
              onClick={nextClick}
              className="text-white rounded-full p-2"
            >
            <svg className="h-7 w-7 md:h-12 md:w-12 sm:h-10 sm:w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                <path fill ="#1e293b" d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 19.984375 13.984375 A 1.50015 1.50015 0 0 0 18.939453 16.560547 L 25.878906 23.5 L 18.939453 30.439453 A 1.50015 1.50015 0 1 0 21.060547 32.560547 L 29.060547 24.560547 A 1.50015 1.50015 0 0 0 29.060547 22.439453 L 21.060547 14.439453 A 1.50015 1.50015 0 0 0 19.984375 13.984375 z"></path>
            </svg>  
          </button>
          </div>
        </div>
      );
}



export default Gallery;
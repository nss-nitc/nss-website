"use client";

import React, { useEffect, useState } from "react";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

const Gallery = () => {
  const [index, setIndex] = useState(1);
  const [preIndex, setPreIndex] = useState(2);
  const [isSliding, setIsSliding] = useState(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  //console.log(index,preIndex)

  const loopImages = [images[images.length - 1], ...images, images[0]];

  const prevClick = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setPreIndex(index);
      setIndex((prevIndex) =>
        prevIndex === 0 ? loopImages.length - 1 : prevIndex - 1
      );

      setIsSliding(false);
    }, 300);
  };

  const nextClick = () => {
    //console.log("hello");

    if (isSliding) return;
    setIsSliding(true);

    setTimeout(() => {
      console.log("hi");
      setPreIndex(index);
      setIndex((prevIndex) =>
        prevIndex === loopImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 300);
  };

  useEffect(() => {
    if (index === loopImages.length - 1 && preIndex == loopImages.length - 2) {
      setTimeout(() => {
        setPreIndex(index);
        setIndex(1);
      }, 300);
    } else if (index === 0 && preIndex === 1) {
      setTimeout(() => {
        setPreIndex(index);
        setIndex(loopImages.length - 2);
      }, 300);
    }
  }, [index]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.pageX);
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    const delta = e.pageX - startX;
    if (delta > 50) prevClick(); // Swipe right to go to the previous image
    else if (delta < -50) nextClick(); // Swipe left to go to the next image
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.changedTouches[0].pageX - startX;

    if (delta > 50) prevClick(); // Swipe right to go to the previous image
    else if (delta < -50) nextClick(); // Swipe left to go to the next image
  };

  return (
    <div className="bg-[#F9F3E6] flex flex-col items-center py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 font-poppins md:text-5xl">
        Gallery
      </h2>
      <div className="flex flex-row justify-center items-center space-x-4">
        {/* Navigation Buttons */}
        <button
          onClick={prevClick}
          className="hidden mg:block lg:block rounded-full p-2"
        >
          <svg
            className="h-7 w-7 md:h-12 md:w-12 sm:h-10 sm:w-10"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1e293b"
              d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 26.470703 13.986328 A 1.50015 1.50015 0 0 0 25.439453 14.439453 L 17.439453 22.439453 A 1.50015 1.50015 0 0 0 17.439453 24.560547 L 25.439453 32.560547 A 1.50015 1.50015 0 1 0 27.560547 30.439453 L 20.621094 23.5 L 27.560547 16.560547 A 1.50015 1.50015 0 0 0 26.470703 13.986328 z"
            ></path>
          </svg>
        </button>
        <div className="bg-[#C0C9DB] relative w-full max-w-3xl overflow-hidden border border-slate-950 rounded-xl min-w-56">
          <div>
            {/* Image Slider */}
            <div
              className={`flex ${
                (index === 1 && preIndex === loopImages.length - 1) ||
                (index === loopImages.length - 2 && preIndex === 0)
                  ? ""
                  : "transition-transform duration-300 ease-in-out"
              }`}
              style={{
                transform: ` translateX(-${index * 100}%)`,
                // change to shift images
                display: "flex",
                // width: `${images.length * 100}%`, // make sure the container width is correct
              }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {loopImages.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Slide ${i}`}
                  className="w-full flex-shrink-0 object-cover rounded-md"
                />
              ))}
            </div>
            <p className="p-1"></p>
			
          </div>
        </div>
        <button
          onClick={nextClick}
          className="hidden mg:block lg:block  rounded-full p-2"
        >
          <svg
            className="h-7 w-7 md:h-12 md:w-12 sm:h-10 sm:w-10"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#1e293b"
              d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 19.984375 13.984375 A 1.50015 1.50015 0 0 0 18.939453 16.560547 L 25.878906 23.5 L 18.939453 30.439453 A 1.50015 1.50015 0 1 0 21.060547 32.560547 L 29.060547 24.560547 A 1.50015 1.50015 0 0 0 29.060547 22.439453 L 21.060547 14.439453 A 1.50015 1.50015 0 0 0 19.984375 13.984375 z"
            ></path>
          </svg>
        </button>
      </div>
	  <div className="flex justify-center mt-4 space-x-2">
              {loopImages.map((_, i) => {
                // Skip rendering the first and last dots
                if (i === 0 || i === loopImages.length - 1) return null;
                return (
                  <button
                    key={i}
                    className={` h-2 w-2 mg:w-3 mg:h-3 lg:w-3 lg:h-3 rounded-full ${
                      (i === 1 && index === loopImages.length - 1) ||
                      (index === 0 && i === loopImages.length - 2) ||
                      i === index
                        ? "bg-gray-800"
                        : "bg-[#C0E8EB]"
                    }`}
                  />
                );
              })}
            </div>
    </div>
  );
};

export default Gallery;

import Image from "next/image";
import React from "react";

const Imagegallary = ({ images }) => {
  return (
    <div className="flex items-center justify-start">
      {images.map((image, index) => (
        <div className="w-full md:w-1/2 lg:w-1/3 " key={index}>
          <div className="relative">
            <Image
              src={image.src}
              alt="dd"
              className=" object-cover"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              {image.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Imagegallary;

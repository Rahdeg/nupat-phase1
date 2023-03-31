import Image from "next/image"

function ImageText({ imageSrc, text1, text2 }) {
    return (
      <div className="relative">
      <Image src={imageSrc} alt="Example" className="w-full h-full object-cover"/>
        
        <div className="absolute bottom-0 left-0 p-4 ">
          <div className="text-white text-lg font-medium">{text1}</div>
          <div className="text-bg text-sm font-bold mt-2">{text2}</div>
        </div>
      </div>
    );
  }
  
  export default ImageText;
  
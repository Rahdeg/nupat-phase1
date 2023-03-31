import Image from "next/image";

function ThreeDivs({
  imageSrc,
  text1,
  text2,
  icon,
  mainText,
  icons,
  bgColor,
  color,
}) {
  return (
    <div className={`flex flex-col p-6  `} style={{ background: `${bgColor}` }}>
      <div className="flex items-center justify-between">
        <div className="flex">
          <Image src={imageSrc} alt="d" className=" rounded-full" />
          <div className="flex flex-col items-start justify-center ml-2">
            <div className="text-lg font-medium " style={{ color: `${color}` }}>
              {text1}
            </div>
            <div className="text-sm" style={{ color: `${color}` }}>
              {text2}
            </div>
          </div>
        </div>

        <div className="mb-2">{icon}</div>
      </div>
      <div className="flex mt-2">
        <div className="text-sm font-medium mb-1" style={{ color: `${color}` }}>
          {mainText}
        </div>
      </div>
      <div className="md:w-1/3 p-4 flex justify-end">{icons}</div>
    </div>
  );
}

export default ThreeDivs;

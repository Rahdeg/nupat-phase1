import React from "react";

const Title = ({ text, bgColor, textColor }) => {
  return (
    <div
      className="bg-gray-300 border-l-4 border-yellow-500 p-1  h-6 flex items-center justify-center "
      style={{ background: `${bgColor}` }}
    >
      <p
        className=" text-primary2 font-light text-sm "
        style={{ color: `${textColor}` }}
      >
        {text}
      </p>
    </div>
  );
};

export default Title;

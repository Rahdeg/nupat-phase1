import React from "react";
import Image from "next/image";

const News = ({ img, title, date, titleColor, bottom }) => {
  return (
    <div
      className="flex  border-t-2  mt-4"
      style={bottom && { borderBottom: `${bottom}` }}
    >
      <Image src={img} alt="ff" className=" object-cover p-4" />

      <div className="flex flex-col items-center p-4">
        <svg
          width="53"
          height="58"
          viewBox="0 0 53 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11"
            y="28"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="11"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="24"
            y="28"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="24"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="36"
            y="28"
            width="6"
            height="6"
            fill="#FFD550"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="36"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M52 20H1V9C1 7.34315 2.34315 6 4 6H49C50.6569 6 52 7.34315 52 9V20Z"
            fill="#FFD550"
          />
          <path
            d="M50 5.66699H3.33333C2.04467 5.66699 1 6.71166 1 8.00033V54.667C1 55.9557 2.04467 57.0003 3.33333 57.0003H50C51.2887 57.0003 52.3333 55.9557 52.3333 54.667V8.00033C52.3333 6.71166 51.2887 5.66699 50 5.66699Z"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40.667 1V10.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.667 1V10.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 19.667H52.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className=" text-heading font-bold text-3xl">{date}</p>
        <p>September</p>
      </div>
      <div className="flex flex-col items-center  border-l-2 gap-3 p-5 mt-2">
        <h1
          className=" text-heading text-xl font-bold"
          style={{ color: `${titleColor}` }}
        >
          {" "}
          {title}{" "}
        </h1>
        <p className="  text-sm">
          {" "}
          We are dedicated in creating added value
          <br />
          for our customers by implementing modern
          <br /> technoloy in our work
        </p>
        <ul className=" list-disc text-base font-bold">
          <li> Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
};

export default News;

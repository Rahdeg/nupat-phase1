import ColorButton from '@/components/ColorButton'
import NavBar from '@/components/NavBar'
import Socialmedia from '@/components/Socialmedia'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import IMG from '../assets/Photo (1).png'



const Home = () => {
  return (
    <div className="relative 1 ">
      <nav className=" text-white px-8 py-5 absolute top-0 left-0 right-0 z-50 flex gap-32 items-center justify-center bg-gradient">
      <div className="flex items-center">
      <a className=" text-white hover:text-gray-900 font-bold text-xl px-4 border-r-2">
        Home
      </a>
    <div className="h-full w-0.5 bg-gray-300 mx-4"></div>
      <a className="text-white hover:text-gray-900 font-bold text-xl px-4 border-r-2">
        About
      </a>
    <div className="h-full w-0.5 bg-gray-300 mx-4"></div>
      <a className="text-white hover:text-gray-900 font-bold text-xl px-4 border-r-2">
        Pages
      </a>
    <div className="h-full w-0.5 bg-gray-300 mx-4"></div>
      <a className="text-white hover:text-gray-900 font-bold text-xl px-4 border-r-2">
        Project
      </a>
    <div className="h-full w-0.5 bg-gray-300 mx-4"></div>
      <a className="text-white hover:text-gray-900 font-bold text-xl px-4">
        Contact
      </a>
  </div>
  <div className='flex items-center gap-7 ml-28 '>
  <Socialmedia/>
  <h1 className=' border rounded-md  text-gray-500  bg-white'>Request qoute</h1>
  </div>
  
      </nav>
      <div className="relative h-screen overflow-hidden">
      <Image
      src={IMG}
      alt='dd'
      />
        <div className="absolute top-0 left-0 p-16 mt-28 ml-36">
        <div className="w-80 h-12 mb-2">
        <Title text='Logistics & Supply Chain Solutions' />
        </div>
          <h1 className="text-white font-bold text-5xl mb-4">Your Gateway <br/>to any Destination <br/> in the World</h1>
          <p className="text-white text-sm mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut scelerisque vitae nisi nec hendrerit. Donec placerat nulla nisl,<br/> ac volutpat libero condimentum nec. Integer in est ut nisl viverra tincidunt.<br/> Suspendisse eu nisi at metus rutrum dictum et eu neque<br/>. Pellentesque sed lorem vitae lorem elementum pretium.<br/> Praesent auctor nibh eu venenatis dapibus.
          </p>
          <ColorButton text='Explore More'/>
        </div>
        
      </div>
    </div>
  );
};

export default Home;



import ColorButton from '@/components/ColorButton'
import ImageText from '@/components/ImageText'
import React from 'react'
import {Transports} from '../data/data'

const Thetransporter = () => {
  return (
    <div className='flex flex-col gap-2 items-center my-10'>
    <h1 className=' text-xl font-bold text-heading'>Transporting Across The World</h1>
    <div className='relative flex items-center justify-evenly p-2 gap-2'>
    {
      Transports  && Transports.map( transport=>(
        <ImageText key={transport.id} imageSrc={transport.img} text1={transport.type} text2={transport.medium}/>
      ))
    }
    </div>
    <div className='absolute h-[400px] bg-yellow-400 w-full flex items-center justify-center'>
    <ColorButton text='More Work'/>
    </div>
    </div>
  )
}

export default Thetransporter
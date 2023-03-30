import ColorButton from '@/components/ColorButton'
import ImageText from '@/components/ImageText'
import React from 'react'
import {Transports} from '../data/data'

const Thetransporter = () => {
  return (
    <div className=' flex flex-col gap-2 items-center mt-72'>
    <div className='flex items-center justify-center'>
    <h1 className=' text-xl font-bold text-heading'>Transporting Across The World</h1>
    </div>
    
    
    <div className='relative h-[400px] bg-yellow-400 w-full flex items-center justify-center'>
    <div className='absolute flex items-center justify-evenly p-2 gap-2 bottom-60 '>
    {
      Transports  && Transports.map( transport=>(
        <ImageText key={transport.id} imageSrc={transport.img} text1={transport.type} text2={transport.medium}/>
      ))
    }
    </div>
    <ColorButton text='More Work'/>
    </div>
    </div>
  )
}

export default Thetransporter
import Button from '@/components/Button'
import ImageText from '@/components/ImageText'
import React from 'react'
import {Transports} from '../data/data'

const Thetransporter = () => {
  return (
    <div className=' relative flex flex-col gap-2 items-center mt-72'>
    
    <div className='flex items-center justify-center'>
    <h1 className=' text-xl font-bold text-heading'>Transporting Across The World</h1>
    </div>
    
    
    <div className=' h-[400px] bg w-full flex items-center justify-center'>
    <div className='absolute flex items-center justify-evenly p-16 gap-2 bottom-60 '>
    {
      Transports  && Transports.map( transport=>(
        <ImageText key={transport.id} imageSrc={transport.img} text1={transport.type} text2={transport.medium}/>
      ))
    }
    </div>
    <Button text='More Work'/>
    </div>
    </div>
  )
}

export default Thetransporter
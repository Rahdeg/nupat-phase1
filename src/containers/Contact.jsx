import Contacts from '@/components/Contacts'
import Form from '@/components/Form'
import Imagegallary from '@/components/Imagegallary'
import Title from '@/components/Title'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { IoIosCall } from 'react-icons/io'
import {Images} from '../data/data' 

const Contact = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-6 bg-primary2'>
    <div className='flex p-10 gap-20'>
    <div className='flex flex-col '>
    <Title text='Contact'/>
    <h1 className=' text-white text-2xl font-bold m-3'>Get in touch with Us</h1>
    <p className=' text-secondary font-normal text-sm mb-5'>Leverage agile framworks to provide a robust<br/>synopsis for strategy foster collaborative<br/>thinking to further the overall value</p>
    <div className='flex flex-col gap-4'>
    <Contacts icon={<BiTime className='w-12 h-12 text-[#F6B426]'/>} text1='Email' text2='contact@logistics.com'/>
    <Contacts icon={<AiOutlineMail className='w-12 h-12 text-[#F6B426]'/>} text1='Call us' text2='(00)112365489'/>
    <Contacts icon={<IoIosCall className='w-12 h-12 text-[#F6B426]'/>} text1='Mon-Sat 9.00-18.00' text2='Sunday Closed'/>
    </div>
    
    </div>
    <div className='p-4 pl-7'>
    <Form/>
    </div>
    </div>
    <div>
    <Imagegallary images={Images}/>
    </div>
    </div>
  )
}

export default Contact
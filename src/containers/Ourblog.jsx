import News from '@/components/News'
import Title from '@/components/Title'
import React from 'react'
import IMG from '../assets/Photo (18).png'
import IMG1 from '../assets/Image (5).png'
import IMG2 from '../assets/Image (6).png'
import ColorButton from '@/components/ColorButton'


const Ourblog = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-14'>
    <div className=' mb-2'>
    <Title text='Our Blog'/>
    </div>
    <p className=' text-heading text-xl font-bold '>Our Latest News</p>
    <div className='flex flex-col mt-3 gap-5'>
    <News img={IMG} title=<p>Inland freight a worthy <br/> solution for your business</p> date='08'/>
    <News img={IMG1} title=<p>How technology can help <br/> redraw the supply chain map</p> date='12' titleColor='#FFBE34'/>
    <News img={IMG2} title=<p>Five things you should have <br/>  ready for your broker</p> date='25' bottom='1px solid black'/>
    </div>
    <div className=' mt-10 mb-2'>
    <ColorButton text='More Blog'/>
    </div>
   
    </div>
  )
}

export default Ourblog
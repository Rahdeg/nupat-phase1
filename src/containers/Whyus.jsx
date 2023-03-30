import Icon from '@/components/Icon'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import IMG from '../assets/Background.png'
import IMG2 from '../assets/Photo (2).png'
import IMG3 from '../assets/Image.png'

const Whyus = () => {
  return (
    <div className='flex flex-col mt-16 items-center justify-center'>
    <div>
    <div className='relative h-screen w-full overflow-hidden'>
    <Image
    src={IMG}
    alt='ss'
    className=' object-cover'
    />
    <div className='absolute w-full h-full inset-0 flex justify-center items-center '>
    <div className='flex flex-col   m-3 p-3'>
    <Title text='Why us'/>
    <h1 className=' text-heading font-bold text-2xl py-2'>We provide full range global<br/> logistics solution</h1>
    <p className=' text-paragraph font-semibold text-sm py-2'>Leverage agile frameworks to provide a robust synopsis for <br/>strategy foster collaborative thinking to further the overall<br/> value proposition</p>
    <p className='text-paragraph font-semibold text-sm py-2'> Organically grow the holistic world view of disruptive<br/> innovation via workplace diversity and empowerment</p>
    <Icon icon={<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='py-2'>
    <circle cx="29" cy="29" r="29" fill="url(#paint0_linear_1_4414)"/>
    <path d="M41 37.4598V24.5402C40.999 24.3536 40.9512 24.1705 40.8612 24.0095C40.7712 23.8484 40.6423 23.7151 40.4875 23.623L29.4875 17.1369C29.3393 17.0472 29.1711 17 29 17C28.8289 17 28.6607 17.0472 28.5125 17.1369L17.5125 23.623C17.3577 23.7151 17.2288 23.8484 17.1388 24.0095C17.0488 24.1705 17.001 24.3536 17 24.5402V37.4598C17.001 37.6464 17.0488 37.8295 17.1388 37.9905C17.2288 38.1516 17.3577 38.2849 17.5125 38.377L28.5125 44.8631C28.6607 44.9528 28.8289 45 29 45C29.1711 45 29.3393 44.9528 29.4875 44.8631L40.4875 38.377C40.6423 38.2849 40.7712 38.1516 40.8612 37.9905C40.9512 37.8295 40.999 37.6464 41 37.4598V37.4598Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 34V27.0995L23 20" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M41 24L29.1138 31L17 24" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29 31V45" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_4414" x1="-1.64433" y1="12.5667" x2="71.3201" y2="17.7482" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFB629"/>
    <stop offset="0.507189" stop-color="#FFDA56"/>
    <stop offset="1" stop-color="#FFD7A6"/>
    </linearGradient>
    </defs>
    </svg>
    } text='Delivery on Time'/>
    <Icon icon={<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='py-2'>
    <circle cx="29" cy="29" r="29" fill="url(#paint0_linear_1_4414)"/>
    <path d="M41 37.4598V24.5402C40.999 24.3536 40.9512 24.1705 40.8612 24.0095C40.7712 23.8484 40.6423 23.7151 40.4875 23.623L29.4875 17.1369C29.3393 17.0472 29.1711 17 29 17C28.8289 17 28.6607 17.0472 28.5125 17.1369L17.5125 23.623C17.3577 23.7151 17.2288 23.8484 17.1388 24.0095C17.0488 24.1705 17.001 24.3536 17 24.5402V37.4598C17.001 37.6464 17.0488 37.8295 17.1388 37.9905C17.2288 38.1516 17.3577 38.2849 17.5125 38.377L28.5125 44.8631C28.6607 44.9528 28.8289 45 29 45C29.1711 45 29.3393 44.9528 29.4875 44.8631L40.4875 38.377C40.6423 38.2849 40.7712 38.1516 40.8612 37.9905C40.9512 37.8295 40.999 37.6464 41 37.4598V37.4598Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35 34V27.0995L23 20" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M41 24L29.1138 31L17 24" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29 31V45" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <linearGradient id="paint0_linear_1_4414" x1="-1.64433" y1="12.5667" x2="71.3201" y2="17.7482" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFB629"/>
    <stop offset="0.507189" stop-color="#FFDA56"/>
    <stop offset="1" stop-color="#FFD7A6"/>
    </linearGradient>
    </defs>
    </svg>
    } text='Delivery on Time'/>
    </div>
    <div className='flex flex-col   m-3 p-3'>
    <Image src={IMG2} alt='ss' width={300}/>
    <Image src={IMG3} alt='ss' width={300}/>
   
    </div>
    </div>
    </div>
   
    </div>
    <div className='flex'>
    <div className='flex items-center justify-center border p-3 m-3 gap-3'>
    <p className=' text-3xl font-extrabold'>1294</p>
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="17" height="17" fill="url(#paint0_linear_1_4448)"/>
<defs>
<linearGradient id="paint0_linear_1_4448" x1="0.0180415" y1="3.68333" x2="21.4042" y2="5.20206" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB629"/>
<stop offset="0.507189" stop-color="#FFDA56"/>
<stop offset="1" stop-color="#FFD7A6"/>
</linearGradient>
</defs>
</svg>
<p>Delivered Packages</p>
    </div>
    <div className='flex items-center justify-center border p-3 m-3 gap-3'>
    <p className='text-3xl font-extrabold'>3594</p>
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="17" height="17" fill="url(#paint0_linear_1_4448)"/>
<defs>
<linearGradient id="paint0_linear_1_4448" x1="0.0180415" y1="3.68333" x2="21.4042" y2="5.20206" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFB629"/>
<stop offset="0.507189" stop-color="#FFDA56"/>
<stop offset="1" stop-color="#FFD7A6"/>
</linearGradient>
</defs>
</svg>
<p>Satisfied Clients</p>
    </div>
    </div>
    </div>
  )
}

export default Whyus
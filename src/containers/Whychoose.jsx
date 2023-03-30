import Icon from '@/components/Icon'
import IconWithText from '@/components/IconWithText'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import IMG from '../assets/Photo.jpg'

const Whychoose = () => {
  return (
    <div className='relative flex w-full h-full mt-5 pt-5 mb-5 '>
    <div className=' bg-primary2  w-full'>
   
    </div>
    <div className=' bg-secondary w-full h-full p-40  flex flex-col gap-2 items-start justify-center'>
    <div className=' w-24'>
    <Title text='Why choose'/>
    </div>
    <h1 className=' text-heading font-bold text-xl'>We create Opportunity to<br/> reach potentials</h1>
    <p className=' text-[#666C89]'>Leverage agile frameworks to provide a robust synopsis for <br/>strategy foster collaborative thinking to further the overall<br/> value proposition.</p>
    <div className=' grid grid-cols-2'>
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
    </div>
    <div className='absolute bottom-40 left-36'>
    <Image src={IMG} alt='ss' className='relative' width={600} height={600}/>
    <div className='absolute -bottom-5 left-28  p-5'> 
    <div className=' bg-yellow-400 p-5'>
    <IconWithText icon={<svg width="65" height="80" viewBox="0 0 65 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.5 42C64.5 59.9565 50.1659 74.5 32.5 74.5C14.8341 74.5 0.5 59.9565 0.5 42C0.5 24.0435 14.8341 9.5 32.5 9.5C50.1659 9.5 64.5 24.0435 64.5 42Z" fill="#FFE6A5" stroke="#1C1F35"/>
    <path d="M48.5 13.5C48.5 20.6627 42.4731 26.5 35 26.5C27.5269 26.5 21.5 20.6627 21.5 13.5C21.5 6.33728 27.5269 0.5 35 0.5C42.4731 0.5 48.5 6.33728 48.5 13.5Z" fill="#FFE6A5" stroke="#1C1F35"/>
    <path d="M60.5 66.5C60.5 73.6627 54.4731 79.5 47 79.5C39.5269 79.5 33.5 73.6627 33.5 66.5C33.5 59.3373 39.5269 53.5 47 53.5C54.4731 53.5 60.5 59.3373 60.5 66.5Z" fill="#FFE6A5" stroke="#1C1F35"/>
    <path d="M35.026 20.9304C39.012 20.9304 42.2434 17.6991 42.2434 13.713C42.2434 9.72694 39.012 6.49561 35.026 6.49561C31.0399 6.49561 27.8086 9.72694 27.8086 13.713C27.8086 17.6991 31.0399 20.9304 35.026 20.9304Z" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.3643 11.4923H41.6887" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.3643 15.9337H41.6887" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M35.0259 20.3752C36.559 20.3752 37.8018 17.3924 37.8018 13.713C37.8018 10.0336 36.559 7.0508 35.0259 7.0508C33.4928 7.0508 32.25 10.0336 32.25 13.713C32.25 17.3924 33.4928 20.3752 35.0259 20.3752Z" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44.0127 47.3867L55.429 40.4743" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42.1455 48.3809L36.9809 51.3627" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.52037 46.9932L17.2363 54.2267C18.2651 55.1923 19.5778 55.7997 20.979 55.9584C22.3803 56.1172 23.7953 55.8188 25.0136 55.1078L56 37.0752L52.1932 32.4032C51.2029 31.1923 49.8128 30.3759 48.2739 30.1015C46.7349 29.8272 45.1488 30.113 43.8019 30.9073L34.7147 36.2556L22.4348 32.1573L19.0578 33.6122C18.8052 33.7206 18.5838 33.8909 18.4142 34.1075C18.2446 34.3241 18.1322 34.5799 18.0874 34.8514C18.0425 35.1229 18.0667 35.4014 18.1576 35.6611C18.2485 35.9208 18.4032 36.1535 18.6075 36.3375L24.8908 41.9932L19.1601 45.2719L13.4295 42.8129L9.9911 44.2883C9.74095 44.3959 9.52154 44.5642 9.35273 44.7781C9.18392 44.9919 9.07104 45.2446 9.0243 45.5131C8.97757 45.7817 8.99845 46.0576 9.08507 46.3161C9.17169 46.5745 9.3213 46.8072 9.52037 46.9932V46.9932Z" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.748 52.6577L34.1644 45.7453" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M53.5128 70.3391V63.6787C53.5123 63.5825 53.4864 63.4881 53.4376 63.4051C53.3889 63.3221 53.3192 63.2533 53.2354 63.2058L47.281 59.8621C47.2008 59.8158 47.1098 59.7915 47.0171 59.7915C46.9245 59.7915 46.8335 59.8158 46.7533 59.8621L40.7989 63.2058C40.7151 63.2533 40.6453 63.3221 40.5966 63.4051C40.5479 63.4881 40.522 63.5825 40.5215 63.6787V70.3391C40.522 70.4353 40.5479 70.5297 40.5966 70.6127C40.6453 70.6957 40.7151 70.7645 40.7989 70.812L46.7533 74.1557C46.8335 74.2019 46.9245 74.2263 47.0171 74.2263C47.1098 74.2263 47.2008 74.2019 47.281 74.1557L53.2354 70.812C53.3192 70.7645 53.3889 70.6957 53.4376 70.6127C53.4864 70.5297 53.5123 70.4353 53.5128 70.3391V70.3391Z" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M53.5128 63.4002L47.0787 67.0089L40.5215 63.4002" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M47.0176 67.0089V74.2263" stroke="#1C1F35" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>} text1='Mowing your Products' text2='across borders'/>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Whychoose
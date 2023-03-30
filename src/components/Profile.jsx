import Image from 'next/image'
import React from 'react'


const Profile = ({profile}) => {
  return (
    <div class="bg-white shadow-md  overflow-hidden">
    <Image src={profile.img} alt='' className='object-cover'/>
  <div class="">
  <div className=' '>
  <div className='bg-primary2 pt-5 pl-5 pb-2'>
  <h2 class=" text-secondary font-bold text-xl ">{profile.name}</h2>
    <h2 class="text-secondary font-light text-sm ">{profile.position}</h2>
  </div>
    
    <div class="flex items-center space-x-4 mb-4 bg-gradient-to-r from-yellow-600 via-yellow-800 to-orange-300 p-2 w-40">
      <a href="#" class="text-gray-600 hover:text-gray-800">{profile?.icon?.linkdiln}</a>
      <a href="#" class="text-gray-600 hover:text-gray-800">{profile?.icon?.twitter}</a>
      <a href="#" class="text-gray-600 hover:text-gray-800">{profile?.icon?.facebook}</a>
      <a href="#" class="text-gray-600 hover:text-gray-800">{profile?.icon?.instagram}</a>
    </div>
  </div>
    
  </div>
</div>

  )
}

export default Profile
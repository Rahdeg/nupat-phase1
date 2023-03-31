import React from 'react'
import ColorButton from './ColorButton'

const Form = () => {
  return (
    <div class="max-w-md mx-auto overflow-hidden  p-6">
  <form>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <input type="text" id="first-name" name="first-name" class="mt-1 block w-full shadow-sm sm:text-sm border p-2 border-[#4E5683] bg-transparent" placeholder='Your name *'/>
      </div>
      <div>
        <input type="text" id="last-name" name="last-name" class="mt-1 block w-full shadow-sm p-2 sm:text-sm border border-[#4E5683] bg-transparent  " placeholder='Email *'/>
      </div>
      <div>
        <input type="text" id="first-name" name="first-name" class="mt-1 block w-full p-2 shadow-sm sm:text-sm border 
        border-[#4E5683] bg-transparent" placeholder='Phone Number *'/>
      </div>
      <div>
        <input type="text" id="last-name" name="last-name" class="mt-1  block w-full p-2 shadow-sm sm:text-sm border border-[#4E5683] bg-transparent "placeholder='City *'/>
      </div>
      
      <div class="col-span-2">
        <textarea id="message" name="message" rows="4" class="mt-1 border border-[#4E5683] p-2 block w-full shadow-sm sm:text-sm  bg-transparent" placeholder='Your Message '></textarea>
      </div>
    </div>
    <div class="mt-6">
      <ColorButton text='Submit Message'/>
    </div>
  </form>
</div>

  )
}

export default Form
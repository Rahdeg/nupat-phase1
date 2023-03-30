import React from 'react'

const Contacts = ({icon,text1,text2}) => {
  return (
    <div className="flex items-center">
    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#111C55] rounded-full p-2 mr-3">
    {icon}
  </div>
    <div className="flex flex-col">
    <div className=" text-paragraph ">{text1}</div>
    <div className="text-paragraph tracking-tighter">{text2}</div>
    </div>
  </div>
  )
}

export default Contacts
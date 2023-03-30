import React from 'react'

const Title = ({text}) => {
  return (
    <div className="bg-gray-300 border-l-4 border-yellow-500 p-1  h-6 flex items-center justify-center ">
    <p className="text-gray-800 font-light text-sm ">{text}</p>
  </div>
  )
}

export default Title
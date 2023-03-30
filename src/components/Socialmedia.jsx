import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'


const Socialmedia = () => {
  return (
    <div className="flex items-center space-x-4">
    <a href="https://www.facebook.com">
      <FaFacebook className=''/>
    </a>
    <a href="https://twitter.com">
    <FiTwitter className=''/>
    </a>
    <a href="https://www.linkedin.com">
    <FiTwitter className=''/>
    </a>
    <a href="https://www.instagram.com">
    <FiTwitter className=''/>
    </a>
    </div>
  )
}

export default Socialmedia
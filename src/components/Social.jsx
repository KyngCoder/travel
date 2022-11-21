import React from 'react'

import {
    RiTwitterFill,
    RiInstagramFill,
    RiGithubFill,
    RiLinkedinFill,
  } from "react-icons/ri";
  
  

const Social = () => {
  return (
    <nav className="social hidden md:block">
    <ul className="transform -translate-x-3/4">
      <li className="flex justify-end">
        <a href="https://www.instagram.com/kyngcoder/">Instagram</a>
        <RiInstagramFill className=" icon rounded-full text-2xl mx-2" />
      </li>
      <li className="flex justify-end">
        <a href="https://www.linkedin.com/in/ricardo-merchant/">LinkedIn</a>
        <RiLinkedinFill className=" icon rounded-full text-2xl mx-2" />
      </li>
      <li className="flex justify-end">
        <a href="https://twitter.com/kyngCoder">Twitter</a>
        <RiTwitterFill className=" icon rounded-full text-2xl mx-2" />
      </li>
     
      <li className="flex justify-end">
        <a href="https://github.com/KyngCoder">Github</a>
        <RiGithubFill className=" icon rounded-full text-2xl mx-2" />
      </li>
    </ul>
  </nav>
  )
}

export default Social
import React from 'react'
import { Link } from 'react-router-dom';
import NavLinks from '../../contexts'

const AboutNavbar = () => {
  return (
    <>
      <div>
        <div></div>
        <div>
          {NavLinks.map((links, i)=> (
            <div className='text-white'>{links}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutNavbar
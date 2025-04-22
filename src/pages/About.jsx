import React from 'react'
import ShapeShifting from '../components/ShapeShifting'

const About = () => {
  return (
    <div className='relative min-h-screen w-screen flex items-center justify-center text-center bg-white'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('./pets-4.png')" }}
      ></div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <ShapeShifting />
    </div>
  )
}

export default About

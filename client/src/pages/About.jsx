import React from 'react'

const About = () => {
  return (
    <div id='about' name='home' className='w-full h-screen bg-[#101114]'>

      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'style={{userSelect:'none'}}>
        
        <h1 className='text-[#E2F0FF] text-3xl sm:text-7xl font-bold border-[#5fdf3f]'>About</h1>

        <p className='text-[#adadad] py-4 max-w-[700px] sm:max-w-none sm:whitespace-normal'>A software engineer with a keen interest in full-stack development and machine learning.</p>

        
      </div>
    </div>
  )
}

export default About

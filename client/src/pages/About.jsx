import React from 'react'

const About = () => {
  return (
    <div id='about' name='home' className='w-full h-screen bg-[#101114]'>

      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'style={{userSelect:'none'}}>
        
        <h1 className='text-[#E2F0FF] text-3xl sm:text-7xl font-bold border-[#5fdf3f]'>About Me \\</h1>

        <p className='text-[#adadad] py-4 max-w-[700px] sm:max-w-none sm:whitespace-normal'>
          I'm Alexander, a passionate full-stack software developer with a strong foundation in various programming languages and technologies. With over 5 years of academic experience and a love for coding, I've honed my skills in Python, JavaScript, Tailwind CSS, React, C++, Java, and more. 
          <br/><br/>
          I hold an extended diploma in Information Technology and a foundation degree in software development from the University of Plymouth, where I've delved deep into the world of software engineering. My academic journey has equipped me with a solid understanding of software principles and a knack for problem-solving.
          <br/><br/>
          
        </p>

        
      </div>
    </div>
  )
}

export default About

import React from 'react';
import jslogo from '../assets/javascript.png';
import reactlogo from '../assets/react.png';
import tailwindlogo from '../assets/tailwind.png';
import htmllogo from '../assets/html.png';
import csslogo from '../assets/css.png';
import githublogo from '../assets/github.png';

const Skills = () => {
  return (
    <div id='skills' name='home' className='w-full h-screen bg-[#101114]'>

      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full' style={{userSelect:'none'}}>
        <div className="flex justify-end">
         <div className="max-w-md p-8 rounded-lg shadow-lg">
          <h1 className='text-[#E2F0FF] text-3xl sm:text-7xl font-bold border-[#5fdf3f]'>My Skills</h1>
         
         </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 select-none'>
          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={jslogo} alt="Javascript icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={reactlogo} alt="ReactJS icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>ReactJS</p>
          </div>
          
          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={htmllogo} alt="HTML5 icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>HTML5</p>
          </div>

          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={csslogo} alt="CSS icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwindlogo} alt="TailwindCSS icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>TailwindCSS</p>
          </div>
          
          <div className='shadow-md shadow-[#101114] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={githublogo} alt="Github icon" />
              <p className='text-[#E2F0FF] font-bold pt-1 text-1xl'>Github</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Skills

import React, { useEffect } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'



const Home = () => {

  useEffect(() => {
    // Scroll to the home section when the component mounts
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id='home' name='home' className='w-full h-screen overflow-x-hidden flex bg-[#101114]'>

      <div className='max-w-[1000px] mx-auto px-12 flex flex-col overflow-x-hidden justify-center h-full'style={{userSelect:'none'}}>
        
        <h1 className='text-[#E2F0FF] text-3xl sm:text-7xl font-bold'>Alexander Holden</h1>
        <h2 className='text-[#adadad] text-base sm:text-2xl font-bold mr-4 sm:max-w-none sm:whitespace-normal'>FdSc Software Developer</h2>

        <p className='text-[#808080] py-4 max-w-[700px] sm:max-w-none sm:whitespace-normal'>A software developer with <b>5+</b> years of academic experience and a keen interest in <i>full-stack development</i> and <i>machine learning</i> solutions.</p>

        <div>
            <HiArrowNarrowRight className='text-[#5fdf3f]'/>
        </div>
      </div>

</div>
  )
}

export default Home

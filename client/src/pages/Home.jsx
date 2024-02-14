import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'



const Home = () => {
  return (
    <div id='home' name='home' className='w-full h-screen bg-[#101114]'>

      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'style={{userSelect:'none'}}>
        
        <h1 className='text-[#E2F0FF] text-3xl sm:text-7xl font-bold'>Alexander Holden</h1>
        <h2 className='text-[#adadad] text-base sm:text-2xl font-bold mr-4 sm:max-w-none sm:whitespace-normal'>BSc Software Engineer</h2>

        <p className='text-[#808080] py-4 max-w-[700px] sm:max-w-none sm:whitespace-normal'>A software engineer with a keen interest in <i>full-stack development</i> and <i>machine learning</i> solutions.</p>

        <div>
            <button className='text-[#E2F0FF] text-2xl pt-3'><HiArrowNarrowRight className='text-[#E2F0FF] hover:text-[#5fdf3f]'/> </button>
        </div>
      </div>

</div>
  )
}

export default Home

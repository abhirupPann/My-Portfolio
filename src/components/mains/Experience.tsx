import React from 'react'
import { HeroHighlight } from '../ui/hero-highlight'
import { WobbleCardDemo } from '../demos/WobbleCardDemo'
function Experience() {
  return (
    <div id='experience'>
      <HeroHighlight className='flex flex-col justify-center items-center'>
        <div className=' px-4  font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
        <div className='text-xl md:text-3xl lg:text-4xl '>
        Experiences what makes you great
        </div>
        <div className=' text-sm sm:text-base text-neutral-500 dark:text-gray-400 my-5'>Here are some of the projects I have worked on.</div>
        </div>
        <WobbleCardDemo/>
      </HeroHighlight>    
    </div>
  )
}

export default Experience

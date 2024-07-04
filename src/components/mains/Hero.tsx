


import { HeroHighlightDemo } from '../demos/HeroHighlightDemo'

import { MultiStepLoaderDemo } from '../demos/MultiStepLoaderDemo'

function Hero() {
  return (
    <div className=' relative flex items-center justify-center h-screen ' id='aboutme'>     
        <HeroHighlightDemo/>
        <div className='absolute top-[20rem] md:left-[45vw] left-[35vw] sm:left-[40vw]  mt-16'>
        <MultiStepLoaderDemo/>
    </div> 
        
            
    </div>
  )
}

export default Hero

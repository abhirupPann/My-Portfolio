
import { HeroHighlight } from '../ui/hero-highlight'
import { InfiniteMovingCardsDemo } from '../demos/InfiniteMovDemo'
import { CanvasRevealEffectDemo } from '../demos/CanvasRevealDemo'


function Services() {
  return (
      <div id='myservice'>
          <HeroHighlight className=' flex flex-col py-10'>
          <div className='text-xl  px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
          <div>Some of the technologies I use frequently.</div>
          </div>
          
        <InfiniteMovingCardsDemo/>
        <CanvasRevealEffectDemo/>
        </HeroHighlight>
      </div>


  )
}

export default Services

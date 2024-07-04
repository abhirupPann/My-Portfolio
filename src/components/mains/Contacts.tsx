
import { HeroHighlight } from '../ui/hero-highlight'
import { IconChevronsRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { IconBrandUpwork } from '@tabler/icons-react';
import { SendEmailDemo } from '../demos/SendEmailDemo';

function Contacts() {

  return (
    <div id="contact">
      <HeroHighlight className=' py-16 flex flex-col items-center justify-center' >
        <div></div>
        <div className='text-xl  px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto'>Ready to take your digital
        presence to the next level?</div>
        <SendEmailDemo/>
        <div className='flex gap-[10vw] py-[10vh]'>
        <Link to={"https://twitter.com/AbhirupPan39213"} className="inline-flex  text-sm sm:text-base h-10 md:h-12  sm:gap-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 sm:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Let's Talk <IconChevronsRight/>
        </Link>
        <Link to={"https://www.upwork.com/freelancers/~01960c965c2c4c1a3b"} className="px-2 sm:px-8 text-sm sm:text-base sm:gap-2 py-2 h-10 md:h-12 flex justify-center items-center rounded-md bg-[#15a800] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#15a800]">
          <IconBrandUpwork className=' mt-1'/>Hire Me
        </Link>
        </div>
        
      </HeroHighlight>  
    </div>
  )
}

export default Contacts

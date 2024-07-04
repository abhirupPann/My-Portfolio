
import { IconBrandUpwork } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Footer() {
  return (
    <div>
    <div className=' h-full text-black dark:text-white bg-white dark:bg-black flex justify-center md:justify-end px-[10vw] py-[10vh]'>
     
      <div className=' flex gap-[5vw]'>
        <div>
            <h1 className=' text-2xl mb-5 cursor-pointer'>Sections</h1>
            <ul className=' flex flex-col gap-2'>
                <HashLink to={"/#experience"} className='flex items-center gap-2 cursor-pointer hover:underline'>Projects</HashLink>
                <HashLink to={"/#myservice"} className='flex items-center gap-2 cursor-pointer hover:underline'>My skills</HashLink>
                <HashLink to={"/#aboutme"} className='flex items-center gap-2 cursor-pointer hover:underline'>About</HashLink>
            </ul>
        </div>
        <div>
            <h1 className=' text-2xl mb-5 cursor-pointer'>Socials</h1>
            <ul className=' flex flex-col gap-2'>
                <Link to={"https://www.linkedin.com/in/abhirup-pan-0195031b8/"} className='flex items-center gap-2 cursor-pointer hover:underline'><IconBrandLinkedin/> Linkedin</Link>
                <Link to={"https://twitter.com/AbhirupPan39213"} className='flex items-center gap-2 cursor-pointer hover:underline'><IconBrandX/> Twitter</Link>
                <Link to={"https://github.com/abhirupPann"} className='flex items-center gap-2 cursor-pointer hover:underline'><IconBrandGithub/>GitHub</Link>
                <Link to={"https://www.upwork.com/freelancers/~01960c965c2c4c1a3b"} className='flex items-center gap-2 cursor-pointer hover:underline'><IconBrandUpwork className='mt-1'/>UpWork</Link>
            </ul>
        </div>
      </div>
    </div>
    <div className=' text-gray-600 dark:text-gray-400 cursor-pointer bg-white dark:bg-black py-4 flex items-center justify-center '>
        @abhiruppan - All rights reserved.
    </div>
    </div>
  )
}

export default Footer

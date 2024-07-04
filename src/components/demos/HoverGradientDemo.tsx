import React from 'react'
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { IconChevronsRight } from '@tabler/icons-react';
function HoverGradientDemo() {
  return (
    <div>
     <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black transition-all duration-300 ease-out hover:ease-in hover:text-blue-600 dark:hover:text-blue-600  bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span className=' flex '>Resume<IconChevronsRight/></span>
      </HoverBorderGradient>
    </div>
  )
}

export default HoverGradientDemo

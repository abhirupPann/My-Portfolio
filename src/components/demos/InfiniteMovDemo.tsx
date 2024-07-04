"use client";


import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandMongodb } from '@tabler/icons-react';
import { IconBrandTypescript } from '@tabler/icons-react';
import { IconBrandJavascript } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandNodejs } from '@tabler/icons-react';
import { IconHtml } from '@tabler/icons-react';
import { IconBrandSass } from '@tabler/icons-react';
import { IconBrandNextjs } from '@tabler/icons-react';
export function InfiniteMovingCardsDemo() {
  return (
    <div className=" my-[15vh] rounded-md flex flex-col antialiased bg-transparent  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    symbol: <IconBrandReact />,

  },
  {
    symbol: <IconBrandJavascript/>

  },
  {
    symbol: <IconBrandMongodb/>

  },
  {
    symbol: <IconBrandNextjs/>

  },
  {
    symbol: <IconBrandNodejs/>

  },
  {
    symbol: <IconBrandSass/>

  },
  {
    symbol: <IconBrandTailwind/>

  },
  {
    symbol: <IconBrandTypescript/>

  },
  {
    symbol: <IconHtml/>

  },
  {
    symbol: <IconBrandMongodb/>

  },

];

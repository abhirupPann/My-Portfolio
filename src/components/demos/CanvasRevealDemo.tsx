"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";
import { IconSourceCode } from '@tabler/icons-react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandCpp } from '@tabler/icons-react';
import { IconDatabase } from '@tabler/icons-react';
import { IconBrandFirebase } from '@tabler/icons-react';
import { IconApi } from '@tabler/icons-react';
export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row  justify-center bg-transparent w-full gap-4 mx-auto px-8">
      <Card title="Programming Languages" lists={["C","C++","Javascript", "Typescript"]} icon={<IconBrandCpp className="mt-[30vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Backend" lists={["Express.js","Node.js","Web-Sockets"]} icon={<IconSourceCode className="mt-[22vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Frontend" lists={["Html & CSS","Bootstrap","Tailwind CSS", "React JS", "Next JS"]} icon={<IconBrandReact className="mt-[29vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Database & ORM" lists={["PostgreSQL","MySQL","MongoDB", "Prisma ORM"]} icon={<IconDatabase className="mt-[25vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="Tools and Technologies" lists={["Docker","Kubernets","Recoil", "Firebase"]} icon={<IconBrandFirebase className="mt-[28vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName=" bg-red-500"
            colors={[[127,0,12,1]]}
          />
        </Card>

        <Card title="Others" lists={["API Development.","Authentication and Authorization.","Payment Gateway Integration.", "Google Sign-In Integration."]} icon={<IconApi className="mt-[34vh]"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#2c1c38]"
            colors={[[174,72,255,1]]}
          />
        </Card>


      </div>
    </>
  );
}

const Card = ({
  title,
  lists,
  icon,
  children,
}: {
  title: string;
  lists: string[];
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border cursor-pointer border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className=" text-3xl text-black dark:text-white group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <ul className="dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        {lists.map((list, i)=>(
           <li key={i}>
            {list}
           </li>
         ))}
        </ul>

      </div>
    </div>
  );
};
// @ts-ignore 
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

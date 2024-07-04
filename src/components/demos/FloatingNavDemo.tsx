"use client";
import React, { useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconMessage, IconUser, IconDeviceImac, IconPresentation, IconBrandGithub} from "@tabler/icons-react";



export function FloatingNavDemo() {
    
  const navItems = [
    {
      name: "About Me",
      link: "/#aboutme",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Skills",
      link: "/#myservice",
      icon: <IconDeviceImac className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "/#experience",
      icon: (
        <IconPresentation className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    // {
    //     name: "Projects",
    //     link: "/projects",
    //     icon: (
    //       <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />
    //     ),
    //   },
      {
        name: "Let's Talk",
        link: "/#contact",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}


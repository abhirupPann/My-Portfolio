"use client";


import { WobbleCard } from "../ui/wobble-card";
import { IconBrandGithub } from '@tabler/icons-react';
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import { Link } from "react-router-dom";
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl px-[10vw] sm:px-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="relative"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Real Time Currency Converter
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Made using react library.
            It converts more than 250+ currency variants, real time value of the currency in the market.
          </p>
        </div>
        <img
          src={img1}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute lg:-right-[10%] grayscale filter -z-20 -top-4 object-contain rounded-2xl"
        />
        <div className=" absolute text-sm text-black z-50 flex gap-[15vw] sm:gap-[45vw] md:gap-[32vw] bottom-5">
            <div className=" hover:underline cursor-pointer">Project details</div>
            <div className="flex gap-5"><Link to={"https://real-time-currency-conve-9b968.web.app/"} className="hover:underline cursor-pointer">Live</Link><Link to={"https://github.com/abhirupPann/currencyconverter.git"} className=" cursor-pointer"><IconBrandGithub/></Link></div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]" className="">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Real-Time-Chat-Application
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A Full Stack Chat Application, made using WebSockets.JWT and cookies for authentication.
        </p>
        <img
          src={img2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-[20%] md:-right-[10%] lg:-right-[10%] bottom-50 object-contain rounded-2xl"
        />
        <div className="absolute text-sm text-black z-50 flex items-center bottom-5">
            <p className=" absolute bottom-[0.5vh] hover:underline cursor-pointer">Project details</p>
            <div className="flex absolute gap-5 left-[40vw] sm:left-[20vw] md:left-[14vw] bottom-[0.5vh]"><Link to={"https://realtime-chat-application-1-5rx7.onrender.com/"} className="hover:underline cursor-pointer">Live</Link><Link to={"https://github.com/abhirupPann/RealTime-Chat-Application"} className=" cursor-pointer"><IconBrandGithub/></Link></div>
        </div>
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
      className="relative">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Real-Time-Chat-Application
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A Full Stack Chat Application, made using WebSockets.JWT and cookies for authentication.
          </p>
        </div>
        <img
          src={img2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-[5%] md:-right-[10%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl"
        />
        <div className="absolute text-sm text-black z-50 flex items-center bottom-5">
            <p className=" absolute bottom-[2vh] hover:underline cursor-pointer">Project details</p>
            <div className="flex absolute gap-5 left-[80vw]"><Link to={"https://real-time-currency-conve-9b968.web.app/"} className="hover:underline cursor-pointer">Live</Link><Link to={"https://github.com/abhirupPann/currencyconverter.git"} className=" cursor-pointer"><IconBrandGithub/></Link></div>
        </div>
      </WobbleCard> */}
    </div>
  );
}

"use client";
import  {  useRef, useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import HoverGradientDemo from "./HoverGradientDemo";
import pdf from "../../assets/AbhirupPan.pdf"

const loadingStates = [
  {
    text: "Collecting Informations.",
  },
  {
    text: "Creating Resume.",
  },
  {
    text: "Synchronizing.",
  },
  {
    text: "Processing.",
  },
  {
    text: "Just kidding it was already created.",
  },

];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const aref:any = useRef();


  const handleOnClick = async() => {
    const wait = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));
        setLoading(true);
        await wait(5000);
        setLoading(false);
        aref.current.click();
        
  };
 

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <div onClick={handleOnClick}>
          <HoverGradientDemo/>
          <a href={pdf} ref={aref}></a>
      </div>

      {loading && (
    
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}

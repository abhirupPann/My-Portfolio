
import { useEffect, useState } from 'react'

import { FloatingNavDemo } from './components/demos/FloatingNavDemo'
import { useRecoilValue } from 'recoil';
import { themeState } from './recoil/RecoilStates';
import Hero from './components/mains/Hero';
import Services from './components/mains/Services';
import Experience from './components/mains/Experience';
import Contacts from './components/mains/Contacts';
import Footer from './components/mains/Footer';
import { ToastBar, Toaster } from 'react-hot-toast';


function App() {
  const theme = useRecoilValue(themeState);

  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  return (
    <div className=' w-full bg-black font-spaceGrotesk'>
        <div><Toaster/></div>
        <FloatingNavDemo/>
        <Hero/>
        <Services/>
        <Experience/>
        <Contacts/>
        <Footer/>
    </div>
  )
}

export default App

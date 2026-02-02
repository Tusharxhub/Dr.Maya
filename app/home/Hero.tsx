
import Image from 'next/image'
import React, { useState } from 'react'
import MoveRight from '../icons/MoveRight'
import { pre } from 'framer-motion/client';
import PlayCard from '../icons/PlayCard';
import Close from '../icons/Close';

const Hero = () => {


 const [bg, setBg] = useState("#fbf6f1");
const [textColor, setTextColor] = useState("#223614");


const [isopen,setIsopen]= useState(false)

const handleToggle = (isopen:boolean)=>{

  setIsopen((prev)=>!prev)
}

interface ColorProps {
  id: number;
  bg: string;
  textColor: string;
}

const colorPalette: ColorProps[] = [
  {
    id: 1,
    bg: "#EBD3F8",
    textColor: "#2E073F",
  },
  {
    id: 2,
    bg: "#EBF4DD",
    textColor: "#90AB8B",
  },
  {
    id: 3,
    bg: "#A18D6D",
    textColor: "#E1D0B3",
  },
];

const handleChange = (bg: string, textColor: string) => {
  setBg(bg);
  setTextColor(textColor);
};



  return (

    <>
    
   
    <div className='min-h-[120vh] relative  w-full bg-[var(--primary-color)] flex  flex-col sm:flex-row md:flex-row' style={{backgroundColor:bg}}>
   
   <div className="capsule absolute right-3.5 z-50 top-[20%] bg-[#bababa]   flex justify-center flex-col items-center min-h-8 px-2.5 rounded-full md:top-[20%]" >


    <div className="flex justify-center items-center" onClick={handleToggle}>
{isopen ?<Close/>:<PlayCard/>

}
    </div>



{isopen  && (

  <div className="flex flex-col  gap-5 relative min-h-3 py-3">

    {colorPalette.map((item:any)=>(

      <div className="flex mt-2.5" itemID={item.id}  onClick={()=>handleChange(item.bg,item.textColor)}>
        <div className="h-6 w-6 rounded-l-full" style={{backgroundColor:item.bg}}></div>
         <div className="h-6 w-6 rounded-r-full" style={{backgroundColor:item.textColor}}></div>
      </div>
    ))}
    
  </div>
)}

   
   </div>
      <div className="h-[60vh] w-[100vw]  flex justify-center items-end pb-2.5 sm:w-[50vw] sm:h-[100vh]">
        <Image src='/newback.png' loading='eager' alt='hero' height={100} width={100} className='h-[60vh] w-full object-contain sm:h-[80vh] md:w-[60vw]' />
      </div>
     <div className="h-[50vh] w-[100vw]  flex flex-col  items-center py-6 capitalize sm:w-[50vw]  sm:h-[100vh] sm:justify-center lg:justify-end lg:pr-32 lg:pb-32">
      <h1 className='text-4xl    font-gopher text-[var(--text-color)] max-w-[300px] md:text-[5vw]  md:max-w-[330px]  text-center lg:max-w-[600px]' style={{color:textColor}}>
        live your life <br /> in full of bloom
      </h1>

   <h3 className='text-center text-lg font-light text-[var(--text-color)] max-w-[200px] pt-5 md:max-w-[330px]'>Therapy for Adults in Minneapolis, MN.</h3>

   <button className='py-2 px-6 bg-transparent border border-black text-black mt-5 font-medium  items-center gap-1.5 capitalize flex hover:bg-[var(--text-color)] hover:text-white duration-700 transition-all'>
    connect with me  <MoveRight  />
   </button>
     </div>
       
    </div>
     </>
  )
}

export default Hero
import React, { useState } from 'react'
import { PiCaretDown } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [toggle , setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
 
  }

  return (
   <>

    <div>
    <div className='black-overlay w-full h-full fixed duration-500 ' style={{
      opacity : toggle ? 1 : 0 ,
      visibility : toggle ? "visible" : "hidden"
  
    }} ></div>
        <navbar>
        <div className='p-[15px] shadow-xl'>
          <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
             <div className='conatiner w-[100px]'>
                  <img  src="../src/assets/swiggy-Logo.png" alt="img1" className='w-full '/>

              </div>
              <div > Swati <span className='font-semibold underline gap-2 text-gray-700'> Other</span> <PiCaretDown onClick={showSideMenu} fontSize={25} className='inline gap-2 text-[0.9rem] text-[#fc8019] cursor-pointer'/></div>
              <div>
                <div className='font-semibold inline' >Search<IoSearch /></div>
              </div>
          </div>
        </div>
        </navbar>

    </div>
   </>
  )
}

export default Navbar
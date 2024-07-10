import React, { useState } from 'react'
import { PiCaretDown } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const [toggle , setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
 
  }
  const hideSlideShow = () => {
    setToggle(false);
  }

  const links = [
    {
      icon :"" ,
      name :"Swiggy Corporate"
    },
    {
      icon : <IoIosSearch/>,
      name :"Search"
    },
    {
      icon : <BiSolidOffer />,
      name :"Offer",
      sup :"new"
    },
    {
      icon : <IoHelpBuoyOutline />,
      name :"Help"
    },
    {
      icon : <VscAccount />,
      name :"Sign in"
    },
    {
      icon : <BsCartCheck />,
      name :"Cart"
    }
  ]

  return (
   <>

    <div>
    <div className='black-overlay w-full h-full fixed duration-500 ' onClick= {hideSlideShow} style={{
      opacity : toggle ? 1 : 0 ,
      visibility : toggle ? "visible" : "hidden"
  
    }} >
      <div  onClick={(e) =>{
        e.stopPropagation();
      }} className='w-[400px] h-full bg-white absolute duration-[400ms] ' style={{
        left : toggle ? '0%' : '-100%'
      }}> hii</div>
    </div>
        <navbar>
        <div className='p-[15px] shadow-xl'>
          <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center'>
             <div className='conatiner w-[100px]'>
                  <img  src="../src/assets/swiggy-Logo.png" alt="img1" className='w-full '/>

              </div>
              <div > Swati <span className='font-semibold underline gap-2 text-gray-700'> Other</span> <PiCaretDown onClick={showSideMenu} fontSize={25} className='inline gap-2 text-[0.9rem] text-[#fc8019] cursor-pointer'/></div>
              <nav className='flex list-none gap-10 ml-auto p-3 font-normal text-[18px] '>
              {
                links.map(
                  (link, index) => {
                    return <li className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                              {link.icon}
                               {link.name}
                               <sup className='text-[#fc8019]'>{link.sup}</sup>
                               </li>
               
                  }
                )
              }

               
             
              </nav>
          </div>
        </div>
        </navbar>

    </div>
   </>
  )
}

export default Navbar
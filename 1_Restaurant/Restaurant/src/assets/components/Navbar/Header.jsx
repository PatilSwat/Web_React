import React from 'react'
import { FaArrowRight , FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <>
        <div className='max-w-[1200px]  mx-auto h-[300px] border border-red-500' >
          <div className='flex my-3 justify-between'>
              <div className=' font-bold text-2xl'>What's on your mind?</div>
              <div className='flex '>
                <div className=' flex w-[30px] m-2 h-[30px] justify-center items-center bg-[#e2e2e7] rounded-full '><FaArrowLeft /></div>
                <div className=' flex w-[30px] m-2 h-[30px] justify-center items-center bg-[#e2e2e7] rounded-full'><FaArrowRight /></div>
              </div>
              <div  >
                <img className='h-20px w-10px flex rounded-full bg-white-600' src='../src/assets/food4.png' alt='imgae2'/>

              </div>
           </div>
        </div>
    </>

  )
}

export default Header
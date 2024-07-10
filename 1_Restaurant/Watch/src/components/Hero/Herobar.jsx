import React from 'react'
import Bodybar from '../Body/Bodybar'


const Herobar = () => {
  return (
    <>
      <div>
      <div>
      <div className='conatiner h-10'>
        <img className="z-1 absolute h-2/4 w-full"  src="../src/assets/banner1.png" alt='image1'/>
        <div className=" container flex text-center relative p-20">
        <img className="conatiner flex h-1/5 w-1/5"  src="../src/assets/food21.png" alt='image2'/>
        <div className="container grid-flow-row ">
           <div className="p-15 text-center">Good Menu</div>
           <h1 className=" py-5 font-extrabold  ">EAT RIGHT FOOD</h1>
           <h3 className="py-2">Eat Healty, it is good for our health.</h3>
        </div>
        <img  className=" relative h-1/5 w-1/5 " src="../src/assets/food5.png" alt='img3' />
  
        </div>
      </div>
    
     </div>
     
      </div>
      <Bodybar/>
    </>
  )
}

export default Herobar

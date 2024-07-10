import React from 'react'
/*
const NavLinks = [
  {
    id:1,
    name: "Home",
    link: "/#",
  },
  {
    id:1,                                          1,
    name:"About",
    link: "/#",
  },
  {
    id:1,
    name:"Contact",
    link: "/#",
  },
];
*/
const Nav = () => {
  return (
    <>
     <div className='conatainer flex shadow-sm : border-x-slate-600 p-4 '> 
       <div className="font-bold  container   flex  justify-between gap-4"> RS</div>
     
      <div className="container flex justify-around " >
        <ul className="container flex justify-around  gap-4">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Category</ul>
          <ul>Menu</ul>
          <ul>Testimonial</ul>
          <ul>Contact</ul>
        </ul>
      </div>
     </div>
    
    </>
    
  )
}

export default Nav

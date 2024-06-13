import React from 'react'
import Nav from './components/Navbar/Nav.jsx'
import Herobar from './components/Hero/Herobar.jsx'
import Bodybar from './components/Body/Bodybar.jsx'
const App = () => {
  return (
    <>
    <div className='bg-blue-400'>App</div>
    <Nav/>
    <Herobar/>
    <Bodybar/>
    </>
    
  )
}

export default App
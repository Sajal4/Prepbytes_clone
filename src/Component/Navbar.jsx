import React from 'react'
import './All1.css'
import Navinside from './Navinside'

const Navbar = () => {
  return (
    <>
    <div className='navcontainer'>
      <div className='menuicon'></div>
      <div className='logo'></div>
      
    
      <div  className='btn'>
    
        <button className='button1'>LOGIN</button>&nbsp;
        <button className='button2'>SIGNUP</button>
      </div>
      <div className="mobile-log">
            <span id="V">V</span>
            <span className='vanshikha'>Vanshika</span> 
            
            </div>
    </div>
    
    <Navinside/>
    </>
  )
}

export default Navbar;
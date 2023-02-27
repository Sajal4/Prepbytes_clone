import React from 'react'
import './All2.css'
const Sbox = (props) => {
  return (
   <>
   <div className='baap'>
      <img src={props.src} alt='erroe' className='simg'/> <span className='s'>{props.title}</span>
      <span  className='s1' style={{color:'lightgrey'}}>{props.msg}</span>
      
    </div>
   </>
  )
}

export default Sbox;
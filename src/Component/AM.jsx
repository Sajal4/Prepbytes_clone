import React from 'react'
import './All2.css'

const AM = (props) => {
  return (
    <>
    <div className='AM'>
        <div className='ambox1'> 
        <img src={props.img1} alt='j'  id='m1'/>
        <img src={props.mamta} alt='j'  id='m2'/>
        <img src={props.img3}  id='m3' alt='gg'/>
         <span className='name'>{props.name}</span>
         <span className='co'>Co-Founder</span>
        <img src={props.s1}  className='amazon' alt='j'/>
        <img src={props.s2}    className='sam'  alt='j'/>

        </div>
        
    </div>
    </>
  )
}

export default AM;
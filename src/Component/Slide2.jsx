import React from 'react'
import img1 from './Images/one.jpg'
import s2 from './Images/s2.jpg'
import s3 from './Images/s3.jpg'
import Hover from './Hover'
import './All2.css'
const Slide2 = () => {
  return (
  <>
  
  <div className='slideparent'>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h1' img={img1}/>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h2' img={s2}/>
   <Hover msg='Industry expert mentor assisted course leading to guaranteed placements' id='h3' img={s3}/>

 
   </div>
  
  </>

  )
}

export default Slide2;
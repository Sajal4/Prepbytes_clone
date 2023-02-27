import React from 'react'
import Midflex from './Midflex'
import './All1.css'
import './All2.css'
import AMPARENT from './AMPARENT'
const Vision = () => {
  return (
   <>
   <div className='visionparent'>
  
     <div className='circle1'></div>
     <div className='circle2'></div>
     <div className='overlapimg'></div>
  
     <div className='i1'></div>
     <div className='i2'></div>
     <div className='i3'></div>
     <div className='i4'></div>
     <span className='mission'> Our Vision <span className='and'>&</span> Mission </span>
     <div className='textcontainer'>
     At PrepBytes, our entire team strongly believes in setting benchmarks for our students whilst upgrading their 
     coding proficiency at a higher intellectual level. Our core motto is to promote the growing employability scope
      in the IT sector & make students aware of the multiple career opportunities in this domain. We're always there 
      for our students starting from providing informative study materials, taking mock tests & interviews to 
      resolving their queries. We strive to achieve 100% placement success.
     </div>
     <div className='bgimg'>
      <div className='bluline'></div>
        <span className='team'>Our Team</span>
     </div>
     <Midflex/>
     <AMPARENT/>
     <div className='teamimg'></div>
     <div className='teamline'></div>
   </div>
   </>
  )
}

export default Vision;
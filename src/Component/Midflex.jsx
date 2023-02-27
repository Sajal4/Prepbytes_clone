import React from 'react'
import './All2.css'
import scholar from './Images/scholar.jpg'
import uni from './Images/Uni.jpg'
import ed from './Images/ed.jpg'
import social from './Images/social.jpg'
import Sbox from './Sbox'
const Midflex = () => {
  return (
  <>
    <div className='contsky'>

<Sbox src={scholar} title='10+' msg='Students Enrolled' />
<Sbox src={uni} title='1000+' msg='Reaches in College' />
<Sbox src={ed} title='10k+' msg='Hours of Learning' />
<Sbox src={social} title='150+' msg='Social Community' />
</div>
  
  </>
  )
}

export default Midflex;
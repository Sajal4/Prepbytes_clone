import React from 'react'
import './All2.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faYoutube,
    
  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='f one'>
              <li><h1>Follow Us</h1></li>
              <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" color='blue'/>&nbsp;&nbsp;
              <FontAwesomeIcon icon={faLinkedin} size="2x" color='darkblue' />&nbsp;&nbsp;
              <FontAwesomeIcon icon={faYoutube} size="2x"  color='red'/>&nbsp;&nbsp;
              <FontAwesomeIcon icon={faInstagram} size="2x"  color='darkred'/>&nbsp;&nbsp;
              </li><br/>
              <li>Contact Us</li><br/>
            <li><FontAwesomeIcon icon="fa-solid fa-phone-volume" /> +91-8448 4466 01</li>
            
            <li> support@prepbytes.com</li>
            {/* <li><FontAwesomeIcon icon="fa-duotone fa-envelope-open" /> support@prepbytes.com</li> */}
        
    </div><br/>
    <div className='f two'>
    <li><h2>QUICK LINKS</h2>
            </li>
            <li>interview Notes</li>
            <li>Mock Tests</li>
            <li>Placement Program</li>
            <li>Coding Test</li>
            <li>About Us</li>
            <li></li>
            <li>Blog</li>
    </div>
    
    </div>
    <hr  className='hr'/>
    <div className='last'>
      <span>Copyright@2022</span><br></br>
      <span>Privacy Policy </span>
      <span>Refund Policy </span>
      <span>Term of Use</span>
    </div>
    </>
  )
}

export default Footer;
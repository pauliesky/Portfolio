import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-name'><h2>Paul</h2></div>
      <div className='footer-comment'><p>You've got to check out my social handles</p></div>
      <div className='footer-icon' >
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-facebook-f"></i></a></div>
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-linkedin"></i></a></div>
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-github"></i></a></div>
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-twitter"></i></a></div>
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-instagram"></i></a></div>
        <div className='foot-icon'  ><a href='#' ><i class="fab fa-medium"></i></a></div>
      </div>
      <div className='footer-bottom'><p>2022 Design by Akinleye Paul</p></div>
    </div>
  )
}

export default Footer

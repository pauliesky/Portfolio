import React from 'react'

import '../css/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <div className='nav-name'>
          <a href='#' >Paul.</a>
          </div>

        <div className='nav-items'>
          <div> <a href='#' className='item'>Home</a></div>
          <div><a href='#' className='item' >About</a></div>
          <div><a href='#' className='item' >Projects</a></div>
          <div><a href='#' className='item' >Contact</a></div>
        </div>

      </nav >
    </div >
  )
}

export default Navbar

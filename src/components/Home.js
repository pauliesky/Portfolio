import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-details'>
        <div className='detail-1'>
          <div className='detail-hey' ><h5>Hey</h5></div>
          <p>Looking for a Front End Developer!</p>
        </div>
        <div className='detail-2'>
          <h1>Here,<br />I'm Akinleye  Paul</h1>
          <p>I transform and build user interfaces into functional web experiences</p>
        </div>

        <div>
          <div className='detail-3'>
            <button className='hire-me'>Hire me</button>
            <button className='cv'>Download CV <i class="fas fa-angle-double-down"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

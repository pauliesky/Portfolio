import React from 'react'
import '../css/Contact.css'

function Contact() {
  return (
    <div>
    <div className='contact'>
      <div className='contact-info'>
        <h2>Contact Me</h2>
        <p>I am a front end developer with key interest in solving problems </p>
      </div>


      <div className='contact-feedback'>
        <div className='contact-input'>
          <input 
            type='text'
            placeholder='Name' />
          <input 
            type='email'
            placeholder='Email' />
          <input
            type='text'
            placeholder='Subject' />
         </div>
          
          <div className='contact-message'>
            <input
              type='textarea'
              placeholder='Message' />
              <button className='send-message'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

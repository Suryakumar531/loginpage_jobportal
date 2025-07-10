import React from 'react'
import './Footer.css'

export const Footer = () => {
  function newsletter(formData){
    const email = formData.get("emailForNewsletter")
    console.log("Subscribed successfully")
  }

  return (
    <footer className="footer">
        <div className="newsletter">
            <h3 className='newsletter-text'>Subscribe to our Newsletter</h3>
            <form className="newsletter-form" action={newsletter}>
              <input aria-label="email for newsletter" type="email" name='emailForNewsletter' placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="copyright">
            &copy; 2025 Job portal Company. All rights reserved.
        </div>
    </footer>

  )
}

import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="newsletter">
            <h3 className='newsletter-text'>Subscribe to our Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="copyright">
            &copy; 2025 Job portal Company. All rights reserved.
        </div>
    </footer>

  )
}

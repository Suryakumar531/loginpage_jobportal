import React from 'react'
import './Header.css'
import jobLogo from "../assets/job-portal.png"

export const Header = () => {
  return (
    <>
        <header className='portal-header'>
            <div className="portal-logo-container">
              <img className="portal-logo" src={jobLogo} alt="job-portal-logo" />
              <h1>Job Portal</h1>
            </div>
            <div className='employer-login-link'>
                <span>For Employers</span>
            </div>
        </header>
    </>
  )
}

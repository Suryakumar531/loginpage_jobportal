import React from 'react'
import jobLogo from "../assets/job-portal.png"

export const Header = () => {
  return (
    <>
        <header className='portal-header'>
            <img className="portal-logo" src={jobLogo} alt="job-portal-logo" />
            <h1 className='portal-title'>Job Portal</h1>
            <div className='employer-login-link'>
                <a href='#'>For Employers</a>
            </div>
        </header>
    </>
  )
}

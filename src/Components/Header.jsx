import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import jobLogo from "../assets/job-portal.png"

export const Header = (props) => {
  const {link, title} = props
  return (
    <>
        <header className='portal-header'>
            <div className="portal-logo-container">
              <img className="portal-logo" src={jobLogo} alt="job-portal-logo" />
              <h1>Job Portal</h1>
            </div>
            <div className='employer-login-link'>
                <Link className='employer-login-link' to={link}>{title}</Link>
            </div>
        </header>
    </>
  )
}

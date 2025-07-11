import React, { useState } from 'react'
import './Employer.css'
import {Header} from './Header.jsx'
import {Footer} from './Footer.jsx'
import emailIcon from "../assets/email.png"
import passwordIcon from "../assets/password.png"
import nameIcon from "../assets/person.png"
import phoneIcon from "../assets/phone-68-24.png"

export const Employer = () => {
  const [formtype,setFormtype] = useState("Login")

  function signUp(formData){
    const username = formData.get("employer username")
    const email = formData.get("employer email")
    const password = formData.get("employer password")
    console.log("Sign up is successful")
  }

  function login(formData){
    const email = formData.get("employer email")
    const password = formData.get("employer password")
    const rememberMe = formData.get("remember")
    console.log("successfully Logged in")
  }
  return (
    <>
    <Header link="/loginpage_jobportal/" title="Home"/>
      <form className='input-container' action={formtype==="Sign up"?signUp:login}>
              <div className="input-header">
                <div className={formtype==="Login"?"input-heading lightgray":"input-heading"} onClick={()=>setFormtype("Login")}>Login</div>
                <div className={formtype==="Sign up"?"input-heading lightgray":"input-heading"} onClick={()=>setFormtype("Sign up")} >Register</div>
              </div>
              <div className='input-area'>
              {formtype==="Sign up"&&
                <div className="input">
                  <img src={nameIcon} alt="username"/>
                  <input type="text" aria-label="employer username" name='employer username' placeholder='Full Name'></input>
                </div>}
                <div className="input">
                  <img src={emailIcon} alt="email"/>
                  <input type="email" aria-label="employer email" name='employer email' placeholder='E-mail'></input>
                </div>
                <div className="input">
                  <img src={passwordIcon} alt="password"/>
                  <input type="password" aria-label="employer password" name='employer password' placeholder='Password'></input>
                </div>
                {formtype==="Sign up"&& <div className="input">
                  <img src={phoneIcon} alt="phone-icon"/>
                  <input type="tel" aria-label="employer phone" name='employer phone' placeholder='Phone number'></input>
                </div>}
                {formtype==="Login"&&
                <div className="input-checkbox">
                  <input type="checkbox" id="remember" name="remember" value="remember" defaultChecked={true}/>
                  <label for="remember"> Remember me</label>
              </div>}
              </div>
              {formtype==="Login"&&
              <div className="forget-password">Forget Password? <span>click here</span></div>}
              <div className="submit-area">
                <button className='submit'>{formtype==="Login"?"Login":"Register"}</button>
              </div>
            </form>
    <Footer />
    </>
  )
}

import React, { useState } from 'react'
import emailIcon from "../assets/email.png"
import passwordIcon from "../assets/password.png"
import nameIcon from "../assets/person.png"

export const Login = () => {

  const [action,setAction] = useState("Sign up")

  return (
    <>
      <div className='input-container'>
        <div className="input-header">
          <div className={action==="Sign up"?"input-heading lightgray":"input-heading"} onClick={()=>setAction("Sign up")} >Sign up</div>
          <div className={action==="Login"?"input-heading lightgray":"input-heading"} onClick={()=>setAction("Login")}>Login</div>
        </div>
        <div className='input-area'> 
          {action==="Sign up"&&
          <div className="input">
            <img src={nameIcon} alt="username"/>
            <input type="text" aria-label="username" placeholder='Username'></input>
          </div>}
          <div className="input">
            <img src={emailIcon} alt="email"/>
            <input type="email" aria-label="email" placeholder='E-mail'></input>
          </div>
          <div className="input">
            <img src={passwordIcon} alt="password"/>
            <input type="password" aria-label="password" placeholder='Password'></input>
          </div>
        </div>
        {action==="Login"&&
        <div className="forget-password">Forget Password? <span>click here</span></div>}
        <div className="submit-area">
          <button className='submit'>{action}</button>
          {/* <div className={action==="Sign up"?"submit lightgray":"submit"} onClick={()=>setAction("Sign up")}>Sign Up</div>
          <div className={action==="Login"?"submit lightgray":"submit"} onClick={()=>setAction("Login")}>Login</div> */}
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import emailIcon from "../assets/email.png"
import passwordIcon from "../assets/password.png"
import nameIcon from "../assets/person.png"

export const Login = () => {

  const [formtype,setFormtype] = useState("Sign up")

  function signUp(formData){
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(username)
  }

  function login(formData){
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
  }

  return (
    <>
      <form className='input-container' action={formtype==="Sign up"?signUp:login}>
        <div className="input-header">
          <div className={formtype==="Sign up"?"input-heading lightgray":"input-heading"} onClick={()=>setFormtype("Sign up")} >Sign up</div>
          <div className={formtype==="Login"?"input-heading lightgray":"input-heading"} onClick={()=>setFormtype("Login")}>Login</div>
        </div>
        <div className='input-area'> 
          {formtype==="Sign up"&&
          <div className="input">
            <img src={nameIcon} alt="username"/>
            <input type="text" aria-label="username" name='username' placeholder='Username'></input>
          </div>}
          <div className="input">
            <img src={emailIcon} alt="email"/>
            <input type="email" aria-label="email" name='email' placeholder='E-mail'></input>
          </div>
          <div className="input">
            <img src={passwordIcon} alt="password"/>
            <input type="password" aria-label="password" name='password' placeholder='Password'></input>
          </div>
        </div>
        {formtype==="Login"&&
        <div className="forget-password">Forget Password? <span>click here</span></div>}
        <div className="submit-area">
          <button className='submit'>{formtype}</button>
        </div>
      </form>
    </>
  )
}

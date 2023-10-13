import React, { useState } from 'react'
import './Auth.css'
import AboutAuth from './AboutAuth';
import icon from '../../assets/stackoverflow-logo.png'
import { signup, login } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
// import { signup } from '../../../../Server/controllers/auth';
function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup (!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert("Enter email & password")
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue")
      }
     dispatch(signup({ name, email, password }, navigate))
    }else {
      dispatch(login({ email, password }, navigate))
    }
    
  }
  return (
   <section className='auth-section'>
      { isSignup && <AboutAuth />}
    <div className='auth-container-2'>
      { !isSignup && <img src={icon} alt='stack over flow' className='login-logo'></img>}

      <form onSubmit={handleSubmit}>
      {
        isSignup && (
          <label htmlFor='name'>
            <h4>Display Name</h4>
            <input type='text' id='name' name='name' onChange={(e)=> {setName(e.target.value)}}/>
          </label>
        )
      }
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type='email' name='name' id='name' onChange={(e)=> {setEmail(e.target.value)}}/>
        </label>

        <label htmlFor='password'>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <h4>Password</h4>
          { !isSignup && <p style={{fontSize:"13px", color:"#007ac6"}}>Forgot Password</p>}
         </div>
          <input type='password' name='password' id='password' onChange={(e)=> {setPassword(e.target.value)}}/>
         { 
          isSignup && <p style={{color: "#666767", fontSize: "13px"}}>password must be contain atleast<br />
          eight characters, including atleast<br /> 1 letter and 1 number</p>
          }


        </label>

        {
          isSignup && (
            <label htmlFor='check'>
            <input type='checkbox' id='check'/>
            <p style={{ fontSize: "13px"}}>Opt-in to receive occasional<br /> product updates, user research invitations,<br /> company announcements, and digets.</p>

            </label>
          )
        }
        <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'}</button>

        {
          isSignup && (
            <p style={{color: "#666767", fontSize: "13px"}}>
              By clicking "sign up", you agree to our
              <span style={{color: "#007ac6"}}> terms of<br /> servies</span>, 
              <span style={{color: "#007ac6"}}> privacy policy</span> and 
              <span style={{color: "#007ac6"}}> cookie policy</span>
            </p>
          )
        }
        
      </form>
      <p style={{display: "flex", fontSize: "13px"}}>{ !isSignup ?  "Don't have an Account?": 'Already have an Account?'}

        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up'}</button>
      </p>  
    </div>
    </section>
  )
}

export default Auth

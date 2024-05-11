import React from 'react'
import './App.css'
import { useState } from 'react';


const App = () => {
  const [input1 , setinput1] = useState(0);
  const [input2 , setinput2] = useState(0)
  const [input3 , setinput3] = useState(0)
  const [input4 , setinput4] = useState(0)
  let x;
  function verify(e)
  {
    console.log(x);
    console.log(parseInt(input1).toString()  + parseInt(input2).toString() + parseInt(input3).toString() + parseInt(input4).toString());
    if(parseInt(input1).toString()  + parseInt(input2).toString() + parseInt(input3).toString() + parseInt(input4).toString() === localStorage.getItem("otp"))
      {
        alert(`You are Verified`)
      }
      else
      alert(`NOT VERIFIED`)
  }
  function generate(e){
    e.preventDefault()
    let otp = '';
    for (let i = 0; i < 4; i++) {
      otp += Math.floor((Math.random() * 10));
    }
      localStorage.setItem("otp",otp)
    console.log(x);
    alert(`Your Otp is: ${otp}`);
  }
  return (
    <div className='App'>
      <div className="container">
       <h1 >OTP GENERATOR</h1>
       
       <strong>The OTP will expire in 30 seconds</strong>
       <form action="">
       <label htmlFor="">ENTER OTP: </label>
        <div className="otp_input"></div>
       <input className='otps'type="text" maxLength="1" size="2" value={input1} onChange={(e) => {setinput1(e.target.value)}}  />
       <input className='otps'type="text"  maxLength="1" value={input2} onChange={(e) => {setinput2(e.target.value)}} />
       <input className='otps'type="text" maxLength="1"  value={input3} onChange={(e) => {setinput3(e.target.value)}}/>
       <input className='otps'type="text" maxLength="1"  value = {input4}  onChange={(e) => {setinput4(e.target.value)}}/>
        <br />
        <br />
        <button onClick={generate}>GENERATE</button>
        <br />
        <br />
        <button onClick={verify}>VERIFY</button>
       </form>
       <span>Didn't recieve Code?<a href="/">Request Again</a></span>
      </div>
    </div>
  )
}

export default App

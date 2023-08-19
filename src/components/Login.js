import React, { useState } from 'react';

import '../login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    console.log(response);

    if (response.ok) {
      const user = await response.json();
      console.log(user);
      onLogin(user);
    } else {
      const errorData = await response.json();
      setError(errorData.message);
    }
  };

  return (
    <div className='login-form'>
      <div>
        <p>Welocome back! <span>👋</span></p>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleLogin} >
          <label htmlFor='username'>UserName</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='Password'>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Log In</button>
          <a href='#' style={{color :'blue',
          textAlign:"center",
          fontSize:"22px",
          marginTop:"10px"}}>Forgot Password</a>
          {

        error && <p style={{color:"orangered"
        ,textAlign:"center"
        ,fontSize:"22px"
        ,fontWeight:'bold'}}>{error}</p>}
        </form>
        <p style={{fontSize:'21px',
      textAlign:'center'}}>Don't Have Accout?<span><a href='#'>
          Signup</a></span></p>
      </div>
      
      
      
    </div>
  );
}

export default Login;

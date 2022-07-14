import React from 'react';
import './Login.css';
import { loginUrl } from "./spotify"; 

function Login() {
  return (
    <div className='login'>
        <img src={require("./images/logo.png")} alt="" />
        <a href={loginUrl}>Login with Spotify</a> 
    </div>
  );
}
  
export default Login;
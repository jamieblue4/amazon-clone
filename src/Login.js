import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo'
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, or Cookies Notice, and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton'>Create your Amazon Account</button>
        </div>

    </div>
  )
};

import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from './firebase';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
   const naviage = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        naviage("/home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   }

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
                <input type='email' value={email}
                onChange={(e) => setEmail(e.target.value)}
                 placeholder='Enter your email' />

                <h5>Password</h5>
                <input type='password' value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password' />

                <button type='submit' onClick={onLogin} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, or Cookies Notice, and our Interest-Based Ads Notice.
            </p>
            <NavLink to="/signup">
                <button className='login__registerButton'>Create your Amazon Account</button>
            </NavLink>
        </div>

    </div>
  )
};

export default Login;
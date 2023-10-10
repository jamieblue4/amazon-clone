import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
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

export default Login;
import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import {firebaseConfig} from './firebase';

function Login () {
    
    const auth = getAuth();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!firebaseConfig) {
        // Firebase config not loaded yet, return loading or null
        return null;
    }

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    const registerUser = async (e) => {
        e.preventDefault();
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..

            });
        }

  return (
    <>
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

                <button type='submit' onClick={(e) => signIn(e)} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, or Cookies Notice, and our Interest-Based Ads Notice.
            </p>
            <NavLink to="/signup">
                <button type='submit' onClick={(e) => registerUser(e)} className='login__registerButton'>Create your Amazon Account</button>
            </NavLink>
        </div>

    </div>
    </>
  )
}


export default Login;
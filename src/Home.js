import React, { useState, useEffect } from 'react';
import "./Home.css";
import Product from './Product';
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from 'firebase/auth';

function Home() {
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

  return (
    <div className="home">
       <div className="home__container">
            <img className="home__image" src="https://m.media-amazon.com/images/I/71n10sjVqbL._SR1500,300_.jpg"
            alt=""/>
       </div>

<div className="products">
       <div className="home__row">
        <Product
        id="1111"
        title="Skyrim Pillow Cover"
        price={10.99}
        image="https://m.media-amazon.com/images/I/41uymlXGkyL._MCnd_AC_.jpg"
        rating={5}
        />
        <Product
        id="2222"
        title="Nintendo Switch With Neon Blue and Neon Red Joy-Con"
        price={294.99}
        image="https://m.media-amazon.com/images/I/41W5CxtCsgL._SY300_SX300_QL70_FMwebp_.jpg"
        rating={4}
        />
       </div>

       <div className="home__row">
        <Product
        id="3333"
         title="PlayStation 5 Console (PS5)"
         price={499.99}
         image="https://m.media-amazon.com/images/I/51eOztNdCkL._SL1500_.jpg"
         rating={4}
         alt="" />
        <Product
        id="4444"
        title="Elite Gourmet EHC-5055 Automatic Brew & Drip Coffee Maker, Black"
        price={18.99}
        image="https://m.media-amazon.com/images/I/61AXdMj3+yL._AC_SL1500_.jpg"
        rating={3}
         />
       </div>
       </div>
    </div>
  )
}

export default Home;
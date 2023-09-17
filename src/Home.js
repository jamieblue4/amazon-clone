import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
       <div className="home__container">
            <img className="home__image" src="https://m.media-amazon.com/images/I/71n10sjVqbL._SR1500,300_.jpg"
            alt=""/>
       </div>

       <div className="home__row">
        <Product
        id="0"
        title="Skyrim Pillow Cover"
        price={10.99}
        image="https://m.media-amazon.com/images/I/41uymlXGkyL._MCnd_AC_.jpg"
        rating={5}
        />
        <Product
        
        />
       </div>

       <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
        {/* Product */}
       </div>

       <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
       </div>
    </div>
  )
}

export default Home;
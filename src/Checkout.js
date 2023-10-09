import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/I/71a9UBpzbRL._SX3000_.jpg" alt="" />
            <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
}

export default Checkout;
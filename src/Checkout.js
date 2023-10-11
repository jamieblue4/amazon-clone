import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    return ( <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/I/71a9UBpzbRL._SX3000_.jpg" alt="" />
        <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
                {cart.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
        </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
)}

export default Checkout;
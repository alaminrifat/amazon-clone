import "./Cart.css";
import React from "react";

const Cart = ({ cart }) => {
    // console.log(props.cart);
    let total = 0;
    let totalShipping = 0 ;
    for (const product of cart) {
        total = total + product.price;
        totalShipping += product.shipping;
    }
    const tax = (total * 7) / 100;
    const grandTotal = total+totalShipping+tax;
    return (
        <div className="cart">
            <h4>Order Summery</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;

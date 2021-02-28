import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    
    let shippingCost = 0;
    if (totalPrice > 35) shippingCost = 4.99;
    else if (totalPrice > 15) shippingCost = 2.99;
    
    let tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (shippingCost + totalPrice + Number(shippingCost)+Number(tax));

    return (
        <div>             
            <h1>Shopping cart</h1>
            <h3>Order  item: {cart.length}</h3>
            <p>Tax: {Number(tax) }</p>
            <p>Shipping cost: {shippingCost}</p>
            <p>Total price: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
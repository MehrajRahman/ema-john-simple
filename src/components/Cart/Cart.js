import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
     
    
    const price = props.cart.reduce((total,product) =>total + product.price,0)
    let shipping= 0;
    if(price > 15){
        shipping = 4.99;
    }
    else if(price > 35){
        shipping = 0;
    }
    else if(price === 0){
        shipping = 0;
    }
    else{
        shipping = 12.99;
    }
    const formatNumber = num =>{
        const precesion = num.toFixed(2);
        return Number(precesion);
    }



    const tax = price/10;
    const totalPrice = price + shipping + tax;

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>items: {formatNumber(price)}</p>
            <p>Shipping: {formatNumber(shipping)} </p>
            <p><small>tax = {formatNumber(tax)}</small></p>
            <p>totalPrice = {formatNumber(totalPrice)}</p>
        </div>
    );
};

export default Cart;
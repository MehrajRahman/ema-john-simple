import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product)
    
    const {name, img ,seller, price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <br/>
                <p><small>{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock</p>
                <button onClick={() => props.handleAddClicked(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>

            </div>
                        
        </div>
    );
};

export default Product;
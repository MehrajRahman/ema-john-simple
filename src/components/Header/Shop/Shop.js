import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product from '../../Product/Product';
import './Shop.css';
import Cart from '../../Cart/Cart';


const Shop = () => {
    
    const [cart, setCart]= useState([]);
    const handleAddClicked = (products) => {
        const newCart = [...cart, products];
        setCart(newCart)
    }
    
    const first10 = fakeData.slice(0,12);
    const [products, setProducts] = useState(first10)
    return (
        <div className="shop-container">
            <div className="products-container">                          
                {
                    products.map(product => <Product product={product} handleAddClicked={handleAddClicked}></Product>)
                }                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            

        </div>
    );
};

export default Shop;
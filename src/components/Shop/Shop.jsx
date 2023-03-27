import './Shop.css'
import React from 'react';
import { useState,useEffect } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="carts-container">
                <h4>cart showing here {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;
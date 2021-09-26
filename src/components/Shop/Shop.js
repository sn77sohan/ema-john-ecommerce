import React, { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
    };
    
    // const handleAddToCart = (product)=> {
    //     console.log(product);
    // }
    return (
        <div className="shop-container">
           <div className="product-container">
        
        {
            products.map(product=><Product key={product.key} 
            product={product}
            handleAddToCart ={handleAddToCart}
            >
            </Product>)
        }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div> 
        </div>
    )
}

export default Shop;

import React, { useState } from 'react'
import ProductList from '../components/ProductList';

const HomePage = () => {
    const [cart, setCart] = useState([]);

    const addToCart =(product) => {
        setCart([...cart, product])
    }
  return (
    <div>
        <h1>Welcome to the Online MarketPlace</h1>
        <ProductList addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
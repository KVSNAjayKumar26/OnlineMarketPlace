import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div className='container'>
        {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
  );
};

export default ProductList;
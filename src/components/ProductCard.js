import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

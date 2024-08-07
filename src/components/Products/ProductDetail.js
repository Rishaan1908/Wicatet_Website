import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import products from "./ProductData";
import { WishlistContext } from "./WishlistContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, user } = useContext(WishlistContext);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToWishlist = () => {
    if (user) {
      addToWishlist(product, quantity);
    } else {
      alert('Please log in or sign up to add items to wishlist');
    }
  };

  return (
    <div style={{ padding: "20px" }} className="home-about-description">
      <h1>{product.name}</h1>
      <img
        src={require(`./ProductImages/image${product.id}.jpeg`)}
        alt={product.name}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Available Quantity:</strong> {product.quantity}</p>
      <p><strong>Review:</strong> {product.review} stars</p>
      <div>
        <Button variant="outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
        <FormControl 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          style={{ width: '60px', textAlign: 'center', margin: '0 10px', display: 'inline-block' }}
        />
        <Button variant="outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>
      <Button variant="primary" onClick={handleAddToWishlist} style={{ marginTop: '10px' }}>
        Add to Wishlist
      </Button>
    </div>
  );
}

export default ProductDetail;
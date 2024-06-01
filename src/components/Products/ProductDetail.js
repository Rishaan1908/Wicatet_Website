import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductData";
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

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
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Review:</strong> {product.review} stars</p>
    </div>
  );
}

export default ProductDetail;

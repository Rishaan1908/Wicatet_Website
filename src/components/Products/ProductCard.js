import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import images from "./ProductImages/ImageIndex";

function ProductCard({ id, index, name, price }) {
  const image = images[index]; // Optional fallback

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/product/${id}`}>
          <img
            src={image}
            className="img-fluid"
            style={{ width: "60%", height: "80%" }}
            alt={name}
          />
        </Link>
        <Card.Text>
          <strong>Price:</strong> ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductCard({ id, index, name, description, price, quantity, review }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/product/${id}`}>
        <img
          src={require(`./ProductImages/image${index + 1}.jpeg`)}
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

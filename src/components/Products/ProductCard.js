import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const imagePath = (index) => require(`./ProductImages/image${index + 1}.jpeg`);

function ProductCard({ id, index, name, price }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/product/${id}`}>
          <img
            src={imagePath(index)}
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
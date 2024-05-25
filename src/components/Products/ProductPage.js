import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const index = products.findIndex(p => p.id === product.id);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src={require(`./ProductImages/image${index + 1}.jpeg`)}
            alt={product.name}
            className="img-fluid"
            style={{ width: "60%", height: "80%" }}
          />
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <p>Quantity: {product.quantity}</p>
          <p>Review: {product.review} stars</p>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;

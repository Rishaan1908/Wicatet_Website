import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProductCard from "./ProductCard";
import products from "./ProductData";

function Products() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Products </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the currently available products.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {products.map((product, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProductCard
                id={product.id}
                index={index}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                review={product.review}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Products;
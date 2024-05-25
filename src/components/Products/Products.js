import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "PEPEROMIA ROSSO",
    description: "Peperomia Rosso plants are tropical semi-succulents with unique thick green leaves with a wrinkled texture. Native to South and Central America, Peperomia Rosso plants love humidity and low to bright indirect light.",
    price: 29.99,
    quantity: 10,
    review: 4.5,
  },
  {
    id: 2,
    name: "ARABICA COFFEE PLANT",
    description: "Arabica Coffee plants are an incredibly unique and versatile addition your space with beautiful glossy green leaves. Native to Ethiopia, Arabica Coffee plants loves humidity and bright indirect light, similar to their bright forest shade environment.",
    price: 49.99,
    quantity: 5,
    review: 4.0,
  },
  {
    id: 3,
    name: "BRAIDED MONEY TREE",
    description: "The Braided Money Tree gets its name from its unique braided trunk and is known for its interesting shape and bright green leaves. Although this plant arrives petite, it can grow as tall as 10 ft. if well taken care of.",
    price: 13.99,
    quantity: 7,
    review: 4.9,
  },
  {
    id: 4,
    name: "NJOY POTHOS",
    description: "The NJoy Pothos plant is a dense and lush beauty, with leaves tumbling over each other with joy. Native to French Polynesia, the Njoy Pothos flourishes when in moderate indirect light and is healthiest when the top 1-inch of soil is allowed to dry out between waterings.",
    price: 17.99,
    quantity: 20,
    review: 3.8,
  },
  {
    id: 5,
    name: "RED PRAYER MARANTA",
    description: "Red Prayer Maranta plants are incredibly unique, with vibrant striped leaves that fold up at night like hands praying. In addition to their striking leaves, they also bloom white and purple flowers when flourishing.",
    price: 21.99,
    quantity: 12,
    review: 4.7,
  },
  {
    id: 6,
    name: "STROMANTHE TRIOSTAR",
    description: "The Stromanthe Triostar Plant is a bright pop of color for your space, with a beautiful mix of variegated reddish-pink and green foliage. Native to the Brazilian rainforest, the Stromanthe Triostar loves strong direct light ",
    price: 27.99,
    quantity: 30,
    review: 4.2,
  },
];

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

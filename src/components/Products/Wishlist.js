import React, { useContext } from "react";
import { Container, Row, Col, Button, Card, FormControl } from "react-bootstrap";
import { WishlistContext } from "./WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist, updateWishlistItemQuantity, user } = useContext(WishlistContext);

  if (!user) {
    return (
      <Container>
        <h1>Wishlist</h1>
        <p>Please log in or sign up to see the wishlist.</p>
      </Container>
    );
  }

  return (
    <section className="project-section">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Wishlist </strong>
          </h1>
          {wishlist.length === 0 ? (
            <p style={{ color: "white" }}>Your wishlist is empty.</p>
          ) : (
            <>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {wishlist.map((item, index) => (
                  <Col md={4} className="project-card" key={index}>
                    <Card className="project-card-view">
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                          <strong>Price:</strong> ${item.price}
                        </Card.Text>
                        <div>
                          <Button variant="outline-secondary" onClick={() => updateWishlistItemQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                          <FormControl 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => updateWishlistItemQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                            style={{ width: '60px', textAlign: 'center', margin: '0 10px', display: 'inline-block' }}
                          />
                          <Button variant="outline-secondary" onClick={() => updateWishlistItemQuantity(item.id, item.quantity + 1)}>+</Button>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() => removeFromWishlist(item.id)}
                          style={{ marginTop: '10px' }}
                        >
                          Remove from Wishlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row className="mt-3">
                <Col md={12} style={{ textAlign: "center" }}>
                  <Button variant="primary" onClick={clearWishlist}>
                    Empty Wishlist
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Container>
    </section>
  );
}

export default Wishlist;
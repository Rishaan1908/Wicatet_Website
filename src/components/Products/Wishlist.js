import React, { useContext } from "react";
import { Container, Row, Col, Button, Card, FormControl } from "react-bootstrap";
import { WishlistContext } from "./WishlistContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"; // Import icons

function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist, updateWishlistItemQuantity, user } = useContext(WishlistContext);

  if (!user) {
    return (
      <Container>
        <h1>Wishlist</h1>
        <p>Please log in to see the wishlist.</p>
      </Container>
    );
  }

  return (
    <section className="wishlist-section">
      <Container fluid>
        <Container>
          <h1 className="wishlist-heading">
            <strong> My Wishlist </strong>
          </h1>
          {wishlist.length === 0 ? (
            <p className="empty-message">Your wishlist is empty.</p>
          ) : (
            <>
              <Row className="wishlist-grid">
                {wishlist.map((item, index) => (
                  <Col md={4} className="wishlist-card-col" key={index}>
                    <Card className="wishlist-card">
                      <Card.Img variant="top" src={item.image} className="wishlist-card-img" alt={item.name} /> {/* Assuming you have image URL */}
                      <Card.Body>
                        <Card.Title className="wishlist-card-title">{item.name}</Card.Title>
                        <Card.Text className="wishlist-card-text">
                          <strong>Price:</strong> ${item.price}
                        </Card.Text>
                        <div className="wishlist-quantity-control">
                          <Button variant="outline-secondary" onClick={() => updateWishlistItemQuantity(item.id, Math.max(1, item.quantity - 1))}>
                            <FaMinus />
                          </Button>
                          <FormControl 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => updateWishlistItemQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                            className="wishlist-quantity-input"
                          />
                          <Button variant="outline-secondary" onClick={() => updateWishlistItemQuantity(item.id, item.quantity + 1)}>
                            <FaPlus />
                          </Button>
                        </div>
                        <Button
                          variant="danger"
                          onClick={() => removeFromWishlist(item.id)}
                          className="wishlist-remove-btn"
                        >
                          <FaTrash /> Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row className="mt-4">
                <Col md={12} className="text-center">
                  <Button variant="warning" onClick={clearWishlist} className="clear-wishlist-btn">
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

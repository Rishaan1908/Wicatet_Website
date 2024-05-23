import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

function About() {
  return (
    <Container fluid className="about-section">
      <h2>Contact Us</h2>
      <ContactForm />
    </Container>
  );
}

export default About;


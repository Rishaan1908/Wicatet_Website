import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Feel free to get in touch with us!</p>

      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Wicatetfarms@gmail.com</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} />
          <span>+1 (352) 973-2244</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>24701 Ward Way, Eustis, FL 32736</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
// src/FAQ.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const QuestionContainer = styled.div`
  margin-bottom: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #007bff;
  font-weight: bold;
`;

const Answer = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: #555;
  border-left: 2px solid #007bff;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Icon = styled.span`
  font-size: 1.5rem;
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return products within 30 days of purchase. The product must be in its original condition.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by logging into your account and clicking on the "Track Order" link in the Orders section.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on the destination.'
    }
  ];

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <br></br>
      {faqs.map((faq, index) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {faq.question}
            <Icon isOpen={openIndex === index}>+</Icon>
          </Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </QuestionContainer>
      ))}
    </Container>
  );
};

export default FAQ;

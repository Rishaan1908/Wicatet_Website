// src/FAQ.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
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

const QuestionContainer = styled.article`
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
  transition: max-height 0.3s ease, padding-top 0.3s ease;
`;

const Answer = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: #555;
  border-left: 2px solid #007bff;
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease, padding-top 0.4s ease;
  padding-top: ${props => (props.isOpen ? '0.3rem' : '0')};
  `;

const Icon = styled.span`
  font-size: 1.5rem;
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.6s ease-out;
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
      question: 'How do I know when to water my plants?',
      answer: 'Dig down 1-2 inches underneath the mulch and feel the soil. If the soil is wet, you don\'t need to water.'
    },
    {
      question: 'How do we buy the products?',
      answer: 'Simply add them to your wishlist then give us a call!'
    }
  ];

  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <br />
      {faqs.map((faq, index) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)} aria-expanded={openIndex === index}>
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

import React, { useState } from 'react';
import './Faq.css';

const FaqComponent = () => {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const faqData = [
        {
            question: 'How often should I water my plants?',
            answer: 'Water your plants when the top inch of soil is dry. This can vary based on the plant type and the environment.',
        },
        {
            question: 'What kind of soil is best for indoor plants?',
            answer: 'A well-draining potting mix is usually best for indoor plants. Avoid garden soil, as it can be too heavy and retain too much water.',
        },
        {
            question: 'How much sunlight do my plants need?',
            answer: 'gang gang',
        },
        
    ];

    const toggleFaqItem = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <br></br>
            <br></br>
            <h2>Frequently Asked Questions</h2>
            <br></br>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleFaqItem(index)}>
                            <h3>{faq.question}</h3>
                            <span className={`faq-icon ${activeFaqIndex === index ? 'active' : ''}`}>
                                {activeFaqIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeFaqIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqComponent;
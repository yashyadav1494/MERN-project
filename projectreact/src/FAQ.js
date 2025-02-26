import React, { useState } from 'react';
import './FAQ.css'; // For styling

const FAQ = () => {
  // FAQ items
  const faqs = [
    {
      question: "What is organic food?",
      answer: "Organic food is grown without the use of synthetic pesticides, fertilizers, or genetically modified organisms (GMOs). It promotes sustainability and is better for your health and the environment."
    },
    {
      question: "Where do you source your ingredients?",
      answer: "We source all of our ingredients from certified organic farms, ensuring that they are sustainably grown and free from harmful chemicals."
    },
    {
      question: "Are your products certified organic?",
      answer: "Yes, all of our products are certified organic by recognized certification bodies. We adhere to strict standards to ensure the integrity of our products."
    },
    {
      question: "Are your products gluten-free?",
      answer: "Yes, many of our products are gluten-free. Please check the product labels or our website for specific details about each product."
    },
    {
      question: "How do I store organic food properly?",
      answer: "Organic food should be stored just like conventional food, but it’s important to keep it in a cool, dry place and away from direct sunlight. For fruits and vegetables, some should be refrigerated while others can be kept at room temperature."
    }
  ];

  // State to manage the visibility of each answer
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If clicked on the already open FAQ, close it
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
            </div>
            {activeIndex === index && (
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

export default FAQ;

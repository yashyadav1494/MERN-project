import React from 'react';
import './Top10Reasons.css';  // Include the CSS file for styling

const topReasons = [
  {
    title: "Better for Your Health",
    description: "Organic foods are grown without the use of harmful pesticides and chemicals, offering cleaner, healthier options for your body.",
    image: "https://www.organicvoices.org/wp-content/uploads/2024/10/brian-wangenheim-bF7LV8deXXE-unsplash-800x600.jpg" // Replace with actual image URL
  },
  {
    title: "No Harmful Chemicals",
    description: "Organic farming avoids synthetic pesticides and fertilizers, leading to fewer harmful chemicals in your food.",
    image: "https://www.organicvoices.org/wp-content/uploads/2024/12/nathan-lemon-W7nbakRx1Ks-unsplash-800x600.jpg"
  },
  {
    title: "Supports Sustainable Farming",
    description: "Organic farming encourages biodiversity, improves soil health, and reduces pollution, making it a sustainable choice for the environment.",
    image: "https://www.organicvoices.org/wp-content/uploads/2024/10/anne-preble-SAPvKo12dQE-unsplash-800x600.jpg"
  },
  {
    title: "Better Taste",
    description: "Many people find that organic produce tastes better because it's grown without artificial additives and preservatives.",
    image: "https://www.organicvoices.org/wp-content/uploads/2024/10/63bb30a014542a8d237312c7_zE11MGGxXqUbe5xRIeN2eh9a-B56vQYzt_ASxmxqCJk-800x600.jpg"
  },
  {
    title: "Supports Local Farmers",
    description: "Buying organic food often means supporting small, local farmers who practice sustainable farming methods.",
    image: "https://erbaviva.com/cdn/shop/articles/family_in_organic_lifestyle.jpg?v=1710326931"
  },
  {
    title: "Protects Wildlife",
    description: "Organic farming methods avoid harmful chemicals that can damage wildlife, making it a more eco-friendly choice.",
    image: "https://static.wixstatic.com/media/34453d_05e23702cd30404eb9b56e5bcf9494d6~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/34453d_05e23702cd30404eb9b56e5bcf9494d6~mv2.jpg"
  },
  {
    title: "Higher Nutritional Value",
    description: "Studies show that organic foods can have higher levels of essential nutrients like vitamins and minerals.",
    image: "https://www.theorganicplace.com.au/wp-content/uploads/2018/01/IMG_3362-600x450.jpg"
  },
  {
    title: "Free from GMOs",
    description: "Organic food is free from genetically modified organisms (GMOs), ensuring that you're consuming natural food.",
    image: "https://fhafnb.com/wp-content/uploads/2023/11/Benefits-of-Choosing-Non-GMO-Foods.jpg"
  },
  {
    title: "Reduces Carbon Footprint",
    description: "Organic farming uses fewer resources and energy compared to conventional farming, helping reduce the carbon footprint.",
    image: "https://i0.wp.com/thepostindia.co.in/wp-content/uploads/2020/10/5-simple-ways-100.jpg?fit=1080%2C1080&ssl=1"
  },
  {
    title: "Supports Animal Welfare",
    description: "Organic farming ensures that animals are raised with ethical practices, providing them with a natural and healthy environment.",
    image: "https://www.reneeloux.com/content/library/org2.jpg"
  }
];

const Top10Reasons = () => {
  return (
    <div className="top-reasons-container">
      <h1 className="title">Top 10 Reasons to Go Organic</h1>
      <div className="reasons-list">
        {topReasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <img src={reason.image} alt={reason.title} className="reason-image" />
            <div className="reason-info">
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Reasons;

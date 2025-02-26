import React, { useState } from 'react';
import './DirtyLittleSecrets.css'; // For styling

const DirtyLittleSecrets = () => {
  // List of dirty little secrets with images and content
  const secrets = [
    {
      title: "The Truth About Pesticides",
      image: "https://www.challenge.org/wp-content/uploads/2019/01/Impacts-of-pesticides-infographic.png", // Replace with actual image URL
      content: "Conventional farms use synthetic pesticides that can be harmful to human health and the environment. These chemicals often linger on crops, entering the food chain and causing potential long-term health risks."
    },
    {
      title: "How GMOs Are Hidden",
      image: "https://media.licdn.com/dms/image/v2/D5612AQG71B_JAnMMLg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697730347052?e=2147483647&v=beta&t=XtZ1FzSXy0hx4TnCH4x60lIPGDdAcSGrg6ZtXlWNnbY", // Replace with actual image URL
      content: "Many foods contain genetically modified organisms (GMOs), but they are not always labeled. These GMOs are created to tolerate herbicides, but may lead to health concerns and environmental damage."
    },
    {
      title: "What’s Really in Your Processed Foods?",
      image: "https://www.eufic.org/en/images/uploads/food-production/Processed_Food_2.png", // Replace with actual image URL
      content: "Processed foods are often loaded with artificial preservatives, sweeteners, and trans fats. These ingredients are linked to obesity, heart disease, and diabetes."
    },
    {
      title: "Factory Farms and Animal Welfare",
      image: "https://cdn.britannica.com/76/245976-050-A8E42260/Cattle-feedlot-south-africa-beef-industry.jpg", // Replace with actual image URL
      content: "Factory farming prioritizes mass production over animal welfare, leading to overcrowding and inhumane conditions for farm animals. This practice impacts animal health, product quality, and the environment."
    }
  ];

  // Accordion state management
  const [activeIndex, setActiveIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle for dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the open FAQ if clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Big Food’s Dirty Little Secrets</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <div className="secrets-list">
        {secrets.map((secret, index) => (
          <div key={index} className="secret-item">
            <div className="image-container">
              <img
                src={secret.image}
                alt={secret.title}
                className={`secret-image ${activeIndex === index ? 'zoom' : ''}`}
              />
            </div>
            <div className="secret-content">
              <h3 className="secret-title" onClick={() => toggleFAQ(index)}>
                {secret.title}
              </h3>
              {activeIndex === index && (
                <p className="secret-text">{secret.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirtyLittleSecrets;

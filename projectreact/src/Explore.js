import React, { useState } from "react"; 

export default function Explore() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "30px 0", minHeight: "100vh" }}>
      <div style={styles.container}>
        <h1 style={styles.title}>Explore Organic Food</h1>
        <p style={styles.description}>
          Watch videos to discover more about the organic food industry, its benefits, and how it impacts your health and the planet.
        </p>

        {/* Responsive Video Containers */}
        <div style={styles.videoContainer}>
          <iframe
            style={styles.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2MTT9sKjT9c?si=azQCLewnWUXQ3rtX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            style={styles.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ASqHa-hgzVY?si=z_83bvfkUxp1oem1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* Button for interaction */}
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleClick}>Learn More</button>
        </div>

        {/* Modal for additional information */}
        {isModalOpen && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <span style={styles.close} onClick={closeModal}>&times;</span>
              <h2>Why Choose Organic?</h2>
              <p>Organic food is produced without the use of synthetic pesticides, fertilizers, or genetically modified organisms. It supports biodiversity, promotes healthier soil, and helps reduce environmental pollution. Organic food is also often richer in nutrients and free from harmful chemicals, making it a healthier choice for you and your family.</p>
              <p>Choosing organic food also supports ethical farming practices and helps preserve natural ecosystems.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    color: "#fff",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  description: {
    color:"blue",
    fontSize: "18px",
    marginBottom: "30px",
    textAlign: "center",
    maxWidth: "800px",
    fontFamily: "'Arial', sans-serif",
  },
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "30px",
  },
  video: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  buttonContainer: {
    marginTop: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "all 0.3s ease",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
    color: "#333",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#333",
  },
};

// CSS media queries for responsiveness
const responsiveStyles = {
  '@media (max-width: 768px)': {
    title: {
      fontSize: "28px",
    },
    description: {
      fontSize: "16px",
    },
    videoContainer: {
      flexDirection: "column",
    },
    video: {
      width: "100%",
    },
    button: {
      fontSize: "16px",
    },
  },
};

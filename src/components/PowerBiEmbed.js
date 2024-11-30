import React, { useState } from "react";

// Importa direttamente le immagini
import advWorks_customers from "../images/advWorks_customers.png";
import advWorks_dashboard from "../images/advWorks_dashboard.png";
import advWorks_map from "../images/advWorks_map.png";
import advWorks_tree from "../images/advWorks_tree.png";
import advWorks_products from "../images/advWors_products.png";

const PowerBIEmbed = () => {
  const images = [
    { src: advWorks_customers, alt: "Customers" },
    { src: advWorks_dashboard, alt: "Dashboard" },
    { src: advWorks_map, alt: "Map" },
    { src: advWorks_tree, alt: "Tree" },
    { src: advWorks_products, alt: "Products" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "600",
          color: "#4C51BF",
          marginBottom: "20px",
        }}
      >
        Power BI Images
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "1140px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            onClick={() => openModal(image.src)} 
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modale per visualizzare l'immagine ingrandita */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal} 
        >
          <img
            src={currentImage}
            alt="Moda"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PowerBIEmbed;



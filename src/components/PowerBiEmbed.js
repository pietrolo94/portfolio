import React from "react";

const PowerBIEmbed = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        padding: "20px",
        backgroundColor: "#f7f7f7", 
      }}
    >
      <div style={{ width: '100%', maxWidth: '1140px', height: '541.25px' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem', 
            fontWeight: '600', 
            color: '#4C51BF', 
            marginBottom: '20px', 
          }}
        >
          Power BI Report
        </h2>
        <iframe
          title="Adventure_works"
          width="100%" 
          height="100%" 
          src="https://app.powerbi.com/reportEmbed?reportId=ce1b0c2d-ee8d-40e3-aecf-a7979a06d9f6&autoAuth=true&ctid=2172c226-b2a7-46ff-9f04-9b89b3cf4e2e"
          allowFullScreen="true"
          style={{
            borderRadius: '10px',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIEmbed;

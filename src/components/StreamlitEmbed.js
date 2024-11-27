import React from "react";

function StreamlitEmbed() {
  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', marginTop: '80px' }}> 

      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        color: '#333', 
        textAlign: 'center', 
        marginBottom: '20px' 
      }}>
        Streamlit Iris Classification App
      </h2>

      <iframe
        src="https://irislogisticregression.streamlit.app/?embed_options=dark_theme,light_theme&embedded=true"  
        width="100%"
        height="800"
        title="Streamlit App"
        style={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      ></iframe>
    </div>
  );
}

export default StreamlitEmbed;


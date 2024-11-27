import React from "react";

function StreamlitEmbed() {
  return (
    <div className="w-full h-full p-5 mt-10">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem', 
            fontWeight: '600', 
            color: '#4C51BF'
          }}
        >
          Streamlit Iris Classification App
        </h2>

      <iframe
        src="https://irislogisticregression.streamlit.app/?embed_options=dark_theme,light_theme&embedded=true"  
        width="100%"
        height="800"
        title="Streamlit App"
        className="rounded-lg border-none shadow-xl"
      ></iframe>
    </div>
  );
}

export default StreamlitEmbed;



import React from "react";
import "./LoadingScreen.css";

const LoadingComponent = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingComponent;

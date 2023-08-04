import React from 'react';
import HomeImage from "./Assets/Hometrial.jpg"
import "./style/home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-text-section">
        <h1 className="primary-heading">Capture Every Moment!</h1>
        <p className="primary-text">
        Do you ever stop and think about how bad you're going to miss a moment you're living long after it's gone? Worry no more.
                    We capture memories so you can re-live them over and over again!
        </p>
        <button className="secondary-button">Learn More</button>
      </div>
      <div className="home-image-section">
        <img className="home-image-container" src={HomeImage} alt="/" />
      </div>
    </div>
  );
};

export default Home;

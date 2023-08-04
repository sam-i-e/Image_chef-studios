import React, { useState, useEffect } from 'react';
import Slider1 from "./Assets/slider1.JPG";
import Slider2 from "./Assets/DJI_0451.jpg";
import Slider3 from "./Assets/Size 8 slider.jpg";
import Slider4 from "./Assets/slider4.jpg";
import Slider5 from './Assets/Young kids.jpg';
import Slider6 from './Assets/slider6.JPG';
import SLider7 from './Assets/DSC_0378.jpg';
import SLider8 from './Assets/DJI_0907.jpg';

import './style/slider.css'; 

const Slider = () => {
  const images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    SLider7,
    SLider8
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(autoPlayInterval);
  }, [images.length]);

  const handleRadioChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={` ${index + 1}`} />
        ))}
      </div>
      <div className="radio-buttons">
        {images.map((_, index) => (
          <input
            type="radio"
            key={index}
            checked={currentImageIndex === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

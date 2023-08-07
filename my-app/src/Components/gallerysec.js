import React from 'react';
import Image1 from './Assets/image1.JPG';
import Image2 from './Assets/image2.JPG';
import Image3 from './Assets/image3.jpg';
import Image4 from './Assets/image4.JPG';
import Image5 from './Assets/image5.jpg';
import Image6 from './Assets/image6.jpg';
import Image7 from './Assets/image7.jpg';
import Image8 from './Assets/image8.jpg';

import './style/gallerysec.css'; 

const GallerySec = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Our Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="explore-button">
                 <button>Explore More</button>
         </div>
    </div>
  );
};

export default GallerySec;

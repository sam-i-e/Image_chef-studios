import React from 'react';

const Service = ({ serviceData }) => {
  const { image, title, description } = serviceData;

  return (
    <>
     <div className="service-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Book Now</button>
    </div>
    </>
   
  );
};

export default Service;

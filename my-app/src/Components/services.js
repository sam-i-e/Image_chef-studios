import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Service from './Service';
import portraitImg from './Assets/service1.jpg';
import eventImg from './Assets/service2.JPG';
import commercialImg from './Assets/service3.jpg';
import droneImg from './Assets/service4.jpg';
import fashionImg from './Assets/service55.jpg';
import landscapeImg from './Assets/service6.jpg';
import natureImg from './Assets/service7.jpg';
import travelImg from './Assets/service8.jpg';
import foodImg from './Assets/service9.jpg';
import weddingImg from './Assets/service10.jpg';
import productImg from './Assets/service11.jpg';
import architecturalImg from './Assets/service12.jpg';

import './style/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      image: portraitImg,
      title: 'Portrait Photography',
      description: 'Capture beautiful and artistic portraits that showcase your personality.',
    },
    {
      id: 2,
      image: eventImg,
      title: 'Event Photography',
      description: 'Preserve the special moments of your events with professional photography.',
    },
    {
      id: 3,
      image: commercialImg,
      title: 'Commercial Photography',
      description: 'High-quality images for your advertising and promotional needs.',
    },
    {
      id: 4,
      image: droneImg,
      title: 'Drone Photography',
      description: 'Aerial photography and videography for stunning perspectives.',
    },
    {
      id: 5,
      image: fashionImg,
      title: 'Fashion Photography',
      description: 'Capturing style and elegance in the world of fashion.',
    },
    {
      id: 6,
      image: landscapeImg,
      title: 'Landscape Photography',
      description: 'Capturing the beauty of nature and scenic landscapes.',
    },
    {
      id: 7,
      image: natureImg,
      title: 'Nature Photography',
      description: 'Explore the wonders of the natural world through photography.',
    },
    {
      id: 8,
      image: travelImg,
      title: 'Travel Photography',
      description: 'Documenting and capturing the essence of travel destinations.',
    },
    {
      id: 9,
      image: foodImg,
      title: 'Food Photography',
      description: 'Showcasing delicious culinary creations with mouth-watering visuals.',
    },
    {
      id: 10,
      image: weddingImg,
      title: 'Wedding Photography',
      description: 'Preserving the precious moments and emotions of weddings.',
    },
    {
      id: 11,
      image: productImg,
      title: 'Product Photography',
      description: 'Highlighting and presenting products in their best light.',
    },
    {
      id: 12,
      image: architecturalImg,
      title: 'Architectural Photography',
      description: 'Capturing the beauty and design of architectural structures.',
    },
  ];

  
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
  <h2 className='title'>Our Services </h2>
 <div className="services-container">     
      <Button onClick={handleScrollLeft} className="scroll-arrow-button left">
        <ArrowBackIos />
      </Button>
      <Box className="services-scroll-container" ref={containerRef}>
        {services.map((service) => (
          <Service key={service.id} serviceData={service} />
        ))}
      </Box>
      <Button onClick={handleScrollRight} className="scroll-arrow-button right">
        <ArrowForwardIos />
      </Button>
    </div>
    </>
   
  );
        };

export default Services;

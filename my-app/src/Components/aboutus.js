import React from 'react';
import About from './Assets/home.jpg';
import "./style/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
        <img src={About} alt='/'/>
      <div className="about-us-description">
      <div className="about-us-text">
        <h1 className="primary-heading">About Us</h1>
      </div>
        <p>
        Image Chef studios is a photography business based in Nairobi County, Kenya. 
        Our passion for photography and the creative potential of the medium has been the driving force behind our business.
        We specialize in capturing moments in time to create beautiful and unique memories that last a lifetime. 
        We're proud to provide a wide range of services to our clients. From wedding and family photography to product and corporate photoshoots,
        We strive to provide the highest quality imagery. My team and I take pride in our creative approach to capturing and creating, and 
        we strive to capture unique and powerful moments that tell a story. We also offer post-production services, such as editing and retouching,
        to ensure that our clients are satisfied with the end result.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

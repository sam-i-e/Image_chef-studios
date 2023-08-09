import React, { useState, useEffect } from 'react';
import ProfilePic from "./Assets/person1.jpg";
import ProfilePicJohn from "./Assets/person2.jpg";
import ProfilePicCeline from "./Assets/person3.jpg";
import Contact from './contact';
import { AiFillStar } from "react-icons/ai";

import "./style/testimonial.css";

const testimonialsData = [
  {
    text: "I couldn't have asked for a better photography team! They captured every moment with sheer brilliance and passion. The quality of their work exceeded our expectations, and their professionalism and friendly demeanor made the entire experience enjoyable. I highly recommend their services to anyone looking for outstanding photographs that truly capture the essence of special moments.",
    stars: 5,
    name: "Liam Chebet",
    profilePic: ProfilePic
  },
  {
    text: "Absolutely impressed by their artistry! From candid shots to staged portraits, they effortlessly brought out the best in us. The final images were breathtaking, and their team's warmth and expertise made the shoot unforgettable. Without a doubt, we found our go-to photographers for life's precious memories!",
    stars: 4,
    name: "Mercy Nyambura",
    profilePic: ProfilePicJohn
  },
  {
    text: "An absolute delight to work with! The team's creativity and attention to detail are commendable. Our photos turned out to be pure magic, and we couldn't be happier. From start to finish, their professionalism and warm approach made the photo session a memorable experience. Highly recommend this talented photography company!",
    stars: 3,
    name: "Brian Atte",
    profilePic: ProfilePicCeline
  }
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const nextTestimonial = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      setIsFadingOut(false);
    }, 1200); 
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading1">What They are Saying</h1>
        <p className="primary-text1">
          "Captivating Moments, Exceptional Photography, Raving Testimonials – See for Yourself!"
        </p>
      </div>
      <div className={`testimonial-section-bottom ${isFadingOut ? "fade-out" : ""}`}>
        <img className="profile" src={testimonial.profilePic} alt="" />
        <p>
          "{testimonial.text}"
        </p>
        <div className="testimonials-stars-container">
          {Array.from({ length: testimonial.stars }).map((_, index) => (
            <AiFillStar key={index} />
          ))}
        </div>
        <h2>{testimonial.name}</h2>
      </div>
      <Contact />
    </div>
  );
};

export default Testimonial;

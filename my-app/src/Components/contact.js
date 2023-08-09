import React from 'react';

import "./style/contact.css";


const Contact = () => {
  return <div className="contact-page-wrapper">
            <h1 className="heading">Do You Have a Question?</h1>
            <h1 className="heading2">Feel Free to Ask :)</h1>
            <div className="contact-form-container">
                <input type="text"  placeholder="example@gmail.com"/>
                <button className="secondary-button">Submit</button>
            </div>
        </div>
  
};

export default Contact;
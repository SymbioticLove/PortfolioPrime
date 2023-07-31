import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-intro">
        If you have any questions, comments, or concerns, feel free to reach out
        to me
      </p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:Matthew@symbiotic.love">Matthew@symbiotic.love</a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+1-912-434-1768">+1 (912) 438-1768</a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/matthew-ford-2a0573272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>LinkedIn</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

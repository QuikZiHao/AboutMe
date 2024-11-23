import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Your Name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Your Email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;

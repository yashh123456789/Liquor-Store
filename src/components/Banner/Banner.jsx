import React from 'react';
import { Container } from 'react-bootstrap';
import './banner.css';

const Banner = ({ title, subtitle, image, children }) => {
  return (
    <section className="about-hero">
      <div className="hero-image-container">
        <img 
          src={image} 
          alt={title} 
          className="hero-background-image"
        />
        <div className="hero-overlay">
        <Container className="hero-content-container">
          <div className="hero-content">
            {title && <h1>{title}</h1>}
            {subtitle && <p className="lead">{subtitle}</p>}
            {children}
          </div>
        </Container>
        </div>
      </div>
    </section>
  );
};

Banner.defaultProps = {
  title: 'Our Story',
  subtitle: 'Crafting exceptional experiences since 1995',
  image: '/default-banner.jpg'
};

export default Banner;
import React from 'react';
import './Hero.css'; 

const brands = [
  'АЛТАНБУЛАГ',
  'САРЫН БРЭНД',
  'БОГД БРЭНД',
  'АЛТАН ӨРГӨӨ',
  'УЛААНБААТАР'
];

const Hero = () => {
  return (
    <div className="hero-section"> {}
      <div className="container">
       <div></div>
        <div className="hero-content">
          <h1>Чамин тансаг хээгээр танд зориулан урлав.</h1>
        </div>
        <div className="brand-list">
          {brands.map((brandName, index) => (
            <button key={index} className="brand-button">
              {brandName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
// src/components/FeaturedBrands.jsx

import React from 'react';
import './FeaturedBrands.css'; // Энэ компонент-д зориулсан CSS файл

// Брэндүүдийн жагсаалт
const brands = [
  'АЛТАНБУЛАГ',
  'САРЫН БРЭНД',
  'БОГД БРЭНД',
  'АЛТАН ӨРГӨӨ',
  'УЛААНБААТАР'
];

const FeaturedBrands = () => {
  return (
    <div className="featured-brands-section">
      <div className="container">
        <div className="brands-list">
          {brands.map((brandName, index) => (
            <button key={index} className="brand-chip">
              {brandName}
            </button>
          ))}
        </div>
        <p className="brands-promo-text">
        Саян, болон Алтан өргөө брэнд хивс 10-20% хямдарлаа.
        </p>
      </div>
    </div>
  );
};

export default FeaturedBrands;
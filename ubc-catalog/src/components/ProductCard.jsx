// src/components/ProductCard.jsx

import React from 'react';
import './ProductCard.css'; // Энэ картны стилийг хадгалах файл

// Энэ компонент "product" гэсэн нэртэй prop хүлээж авна.
const ProductCard = ({ product }) => {
  // prop-оосоо хэрэгтэй мэдээллээ задлая
  const { brand, name, price, imageUrl, colors } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-brand">{brand}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price.toLocaleString()}₮</p>
        <div className="product-colors">
          {colors.map((color, index) => (
            <span
              key={index}
              className="color-swatch"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
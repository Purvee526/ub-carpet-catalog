// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Хуудас хооронд шилжихэд ашиглана
import './HomePage.css';

const categories = [
  "Алтанбулаг Хивс", "Саян Хивс", "Богд Хивс", 
  "Улаанбаатар Хивс", "Ханны Хивс", "Дрож", "Тусгай Захиалга"
];

function HomePage() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Цэвэр хонины ноосон хивс</h1>
        <p className="hero-subtitle">Чамин тансаг хээгээр танд зориулан урлав</p>
        <div className="hero-buttons">
          {categories.slice(0, 2).map(cat => (
             <Link key={cat} to="/products" className="hero-button">{cat}</Link>
          ))}
        </div>
        <Link to="/products" className="view-all-link">Бүх бүтээгдэхүүн харах →</Link>
      </div>
    </div>
  );
}

export default HomePage;
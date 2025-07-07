import React from 'react';
import './FilterBar.css'; 

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-bar-title">
        <h2>ХИВСНИЙ КАТАЛОГИ</h2>
        <p>100% Монгол хонины ноосон хивс</p>
      </div>
      <div className="sort-options">
        <button className="sort-button">
          Загварын төрөл
          <span className="sort-arrows">↑↓</span>
        </button>
      </div>
    </div>
  );
};

// Хамгийн чухал нь энэ компонентоо экспортлох
export default FilterBar;
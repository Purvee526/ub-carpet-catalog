// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// SVG дүрснүүд (зураг татаж ашиглахын оронд кодоор хийх нь хурдан)
const SearchIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const HeartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const BagIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>;

function Header() {
  return (
    <header className="site-header-main">
      <div className="header-content">
        <div className="logo-section">
          {/* <img src="/logo.png" alt="УБ Хивс Лого" className="logo-image" /> */}
          <Link to="/" className="logo-text">Улаанбаатар Хивс ХК</Link>
        </div>

        <nav className="navigation-menu">
          <Link to="/products" className="nav-link">Бүтээгдэхүүн</Link>
          <Link to="#" className="nav-link">Тусгай захиалга</Link>
          <Link to="#" className="nav-link">Бидний тухай</Link>
        </nav>

        <div className="action-icons">
          <button className="icon-button"><SearchIcon /></button>
          <button className="icon-button"><HeartIcon /></button>
          <button className="icon-button"><BagIcon /> Bag (0)</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
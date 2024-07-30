// Card.js
import React from 'react';
import './Card.css';
import { FaGlobe, FaRuler, FaLanguage, FaRegHandshake, FaSearch, FaBullhorn, FaShoppingCart, FaTypo3, FaBuilding } from 'react-icons/fa';

const iconComponents = {
  FaGlobe: FaGlobe,
  FaRuler: FaRuler,
  FaLanguage: FaLanguage,
  FaRegHandshake: FaRegHandshake,
  FaSearch: FaSearch,
  FaBullhorn: FaBullhorn,
  FaShoppingCart: FaShoppingCart,
  FaTypo3: FaTypo3,
  FaBuilding: FaBuilding
};

function Card({ title, description, icon }) {
  const IconComponent = iconComponents[icon];
  return (
    <div className="card">
      <div className="icon"><IconComponent /></div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;

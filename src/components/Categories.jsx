import React from 'react';
import './style/Categories.scss';

function Categories({ onCategorySelect }) {
  return (
    <div className="categories">
      <button className="category-btn" onClick={() => onCategorySelect("prv")}>Привилегии</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_d")}>Кейс с донатом</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_m")}>Кейс с монетками</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_t")}>Кейс с титулами</button>
      <button className="category-btn" onClick={() => onCategorySelect("oth")}>Разное</button>
    </div>
  );
}

export default Categories;

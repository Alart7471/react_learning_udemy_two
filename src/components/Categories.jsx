import React from 'react';
import { Link } from 'react-router-dom';
import './style/Categories.scss';

//добавить потом роутер

function Categories() {
  return (
    <div className="categories">
      <button className="category-btn">Лайт Анархия</button>
      <button className="category-btn">Классик Анархия</button>
      <button className="category-btn">Привилегии</button>
      <button className="category-btn">Кейс с донатом</button>
      <button className="category-btn">Кейс с сапфирами</button>
      <button className="category-btn">Кейс с титулами</button>
      <button className="category-btn">Сапфиры и Коины</button>
    </div>
  );
}

export default Categories;

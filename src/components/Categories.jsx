import React from 'react';
import { Link } from 'react-router-dom';
import './style/Categories.scss';
import Button from '@mui/material/Button';
//добавить потом роутер

function Categories({ onCategorySelect }) {
  return (
    <div className="categories">
      <button className="category-btn server">Server 1</button>
      <button className="category-btn server">Server 2</button>
      <button className="category-btn" onClick={() => onCategorySelect("prv")}>Привилегии</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_d")}>Кейс с донатом</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_m")}>Кейс с монетками</button>
      <button className="category-btn" onClick={() => onCategorySelect("cs_t")}>Кейс с титулами</button>
      <button className="category-btn" onClick={() => onCategorySelect("oth")}>Разное</button>
      {/* <div>
      <Link to="/server1">
        <Button variant="contained" className="category-btn">Server 1</Button>
      </Link>
      <Link to="/server2">
        <Button variant="contained" className="category-btn">Server 2</Button>
      </Link>
      <Link to="/privileges">
        <Button variant="contained" className="category-btn">Привилегии</Button>
      </Link>
      <Link to="/cases-with-donat">
        <Button variant="contained" className="category-btn">Кейс с донатом</Button>
      </Link>
      <Link to="/cases-with-coins">
        <Button variant="contained" className="category-btn">Кейс с монетками</Button>
      </Link>
      <Link to="/cases-with-titles">
        <Button variant="contained" className="category-btn">Кейс с титулами</Button>
      </Link>
      <Link to="/other">
        <Button variant="contained" className="category-btn">Разное</Button>
      </Link>
      </div> */}
    </div>
    
  );
}

export default Categories;

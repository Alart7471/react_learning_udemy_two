import React from "react";
import './style/ShopItems.scss';
import { Button, Typography } from "@mui/material";

function ShopItems({ products, selectedCategory, onItemClick }) {
    // Фильтрация товаров по выбранной категории
    const filteredProducts = products.filter(item => item.category === selectedCategory);

    function renderItems() {
        return filteredProducts.map((item, i) => (
            <ShopItem key={i} item={item} onClick={() => onItemClick(item)} />
        ));
    }

    function ShopItem({ item, onClick }) {
        return (
            <div className="product-card" onClick={onClick}>
                <p>{item.id}</p>
                <h3>{item.name}</h3>
                {/* <p>{item.description}</p> */}
                <p>{item.price[0]} ₽</p>
                <img src={item.url} alt={item.name} />
                <Button variant="contained" color="primary">Купить</Button>
            </div>
        );
    }

    return (
        <div className="products">
            {renderItems().length ? (
                renderItems()
            ) : (
                <div className="products-empty">
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Товары не найдены
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                            Перезагрузить страницу
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopItems;

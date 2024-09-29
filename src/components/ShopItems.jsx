import React, { useState, useEffect } from "react";
import axios from "axios";
import './style/ShopItems.scss';

function ShopItems({ choosedCategory }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getShopItems();
    }, []);

    async function getShopItems() {
        console.log("getShopItems called");
        await axios
        .get("http://localhost:8000/api/shop/items")
        .then((response) => {
            setProducts(response.data);
        });
    }

    function renderItems() {
        return products.map((item, i) => {
            return <ShopItem key={i} item={item} />
        });
    }

    function ShopItem({ item }) {
        return (
            <div className="product-card">
                <p>{item.id}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <img src={item.url} alt={item.name}/>
                <button>Купить</button>
            </div>
        );
    }

    return (
        <div className="products">{renderItems()}</div>
    );
}

export default ShopItems;
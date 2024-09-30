import React, { useState } from "react";
import ShopItems from "../components/ShopItems";
import Categories from "../components/Categories";
import '../components/style/Shop.scss';

function Shop() {

    //брать из категорий выбранную и передавать в ShopItems
    const [selectedCategory, setSelectedCategory] = useState("prv");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
      };
    return (
        <div>
            <h1>Shop</h1>
            <div className="shop-container">
                <div className="left">
                    left
                    <Categories onCategorySelect={handleCategorySelect}/>
                </div>
                <div className="right">
                    right
                    <ShopItems selectedCategory={selectedCategory}/>
                </div>
            </div>
        </div>
    );
}



export default Shop;
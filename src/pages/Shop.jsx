import React, { useState } from "react";
import ShopItems from "../components/ShopItems";
import Categories from "../components/Categories";
import '../components/style/Shop.scss';

function Shop() {

    //брать из категорий выбранную и передавать в ShopItems
    const [choosedCategory, setChoosedCategory] = useState(0);

    return (
        <div>
            <h1>Shop</h1>
            <div className="shop-container">
                <div className="left">
                    left
                    <Categories />
                </div>
                <div className="right">
                    right
                    <ShopItems />
                </div>
            </div>
        </div>
    );
}



export default Shop;
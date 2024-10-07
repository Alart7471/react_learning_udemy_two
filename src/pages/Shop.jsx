import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import ModalTestOne from "../components/ModalTestOne";
import ShopItems from "../components/ShopItems";
import { useNavigate } from "react-router-dom";
import '../components/style/Shop.scss';
import axios from "axios";

function Shop({isHidden, userNickname}) {
    const navigate = useNavigate();
    const [_, __, categoryName, itemName] = window.location.pathname.split('/');
    const [selectedCategory, setSelectedCategory] = useState(categoryName || "prv"); // Устанавливаем выбранную категорию
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]); // Переносим хранение товаров в Shop

    // Получаем все товары
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/shop/items");
                setProducts(response.data);
            } catch (error) {
                console.log("Ошибка при загрузке товаров:", error);
            }
        };
        fetchItems();
    }, []);

    // Этот useEffect отвечает за получение товара из URL, если страница перезагружается
    useEffect(() => {
        if (products.length > 0 && itemName) {
            const foundItem = products.find(item => item.name === itemName);
            if (foundItem) {
                setSelectedItem(foundItem);
                setIsModalOpen(true); // Открываем модалку, если товар найден
            } else {
                console.log("Товар не найден");
            }
        }
    }, [itemName, products]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        navigate(`/category/${selectedCategory}/${item.name}`); // Обновляем URL при нажатии на товар
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        navigate(`/`); // Меняем URL на /
    };
    return (
        <div>
            <h1 className="shop-title">Shop</h1>
            <div className={isHidden ? "shop-container hidden" : "shop-container"}>
                <div className="left">
                    <Categories onCategorySelect={handleCategorySelect} />
                </div>
                <div className="right">
                    {/* {products.length === 0 && <p>Loading...</p>} */}
                    <ShopItems 
                        products={products} 
                        selectedCategory={selectedCategory} 
                        onItemClick={handleItemClick} 
                    />
                </div>
            </div>
            <ModalTestOne 
                open={isModalOpen}
                handleClose={handleCloseModal} 
                item={selectedItem}
                userNickname={userNickname}
            />
        </div>
    );
}

export default Shop;

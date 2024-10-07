import React, { useState, useEffect } from "react";
import Shop from "./Shop";
import '../components/style/Home.scss';
import Cookies from 'js-cookie';
import WelcomeModal from "../components/WelcomeModal";

function HomePage() {
    const [userNickname, setUserNickname] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false); // Управляем состоянием модального окна

    // Сохраняем никнейм в куки
    function saveNicknameCookie(nickname) {
        Cookies.set('userNickname', nickname); // Сохраняем никнейм в куки
        setUserNickname(nickname); // Обновляем состояние
    };

    // Получаем никнейм из куки
    function getNicknameCookie() {
        const value = Cookies.get('userNickname');
        if (value && value !== 'no') {
            setUserNickname(value); // Если куки есть, устанавливаем значение
            setModalOpen(false);    // Закрываем модальное окно
        } else {
            // setUserNickname("no");  // Если куки нет, устанавливаем "no"
            setModalOpen(true);     // Открываем модальное окно
        }
    };

    // Проверка куки при загрузке страницы
    useEffect(() => {
        getNicknameCookie(); // Проверяем куки при первой загрузке страницы
    }, []);

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="container">
            {/* Проверяем, если никнейм в куки уже есть, то показываем магазин, иначе модальное окно */}
            {
                userNickname
                ? (
                    <>
                    {/* <button onClick={() => Cookies.remove('userNickname')}>disable nick</button> */}
                    <Shop isHidden={false} userNickname={userNickname} />
                    </>    
                )  // Если никнейм есть, показываем Shop
                : (
                    <>
                        <Shop isHidden={true}  />
                        {isModalOpen && (
                            <WelcomeModal 
                                onClose={handleCloseModal} 
                                onSaveNickname={saveNicknameCookie} 
                            />
                        )}
                    </>
                )
            }
        </div>
    );
}

export default HomePage;

import React, { useState } from 'react';
import './style/WelcomeModal.scss'; // Импортируем стили

const Modal = ({ isOpen, onClose, onSaveNickname }) => {
    const [nickname, setNickname] = useState('');

    const handleGuestClick = () => {
        onSaveNickname('no'); // Сохраняем ник "no"
        onClose(); // Закрываем модальное окно после нажатия
    };

    const handleSaveClick = () => {
        if (nickname.trim()) {
            onSaveNickname(nickname); // Сохраняем введённый никнейм
            onClose(); // Закрываем модальное окно после нажатия
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Введите никнейм</h2>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Ваш никнейм"
                />
                <button onClick={handleSaveClick}>Сохранить</button>
                <button onClick={handleGuestClick}>Гость</button>
            </div>
        </div>
    );
};

export default Modal;

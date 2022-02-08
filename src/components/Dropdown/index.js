import React from 'react';
import './style.scss';

const Dropdown = ({ popupRef, activePopup, cardModile }) => {
    return (
        <div>
            <div className={`${cardModile ? 'popup__mobile' : 'popup'} ${activePopup ? 'active' : ''}`} ref={popupRef}>
                <ul>
                    <li>Пожаловаться</li>
                    <li>Скрыть кандидата</li>
                </ul>
            </div>
        </div >
    );
};

export default React.memo(Dropdown);
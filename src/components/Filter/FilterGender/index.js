import React from 'react';
import './style.scss';

const FilerGender = () => {
    return (
        <div className="content">
            <div className="content__info">Пол</div>
            <div className="content__border"></div>
            <div className="content__range"></div>
            <div className="content__buttons">
                <button className="button active">Любой</button>
                <button className="button">Женщины</button>
                <button className="button">Мужчины</button>
            </div>
        </div>
    );
};

export default FilerGender;
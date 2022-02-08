import React from 'react';
import userIcon from '../../assets/menu-icon/user-icon.png';
import './style.scss';


const SearchBar = ({ width }) => {
    return (
        <div className="header">
            <div className="headre__item-title">
                <img src={userIcon} alt={userIcon} />
                <p>Николай Брынзочкин</p>
            </div>
            <div className="headre__item-search">
                <div className="search">
                    <form className="search__form">
                        <input type="text" className="search__form-input position" placeholder={width ? 'На какую должность вы ищете кандидата?' : 'Поиск'}></input>
                        <input type="text" className="search__form-input city" placeholder="Город"></input>
                        <button type="button" className="search__form-btn">
                            Найти кандидатов
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
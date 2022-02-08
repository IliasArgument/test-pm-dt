import React from 'react';
import networkIcon from '../../assets/header-icon/network.png';
import vectorIcon from '../../assets/header-icon/Vector.png';
import './style.scss';


const HeaderNavigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="menu">
                        <div className="menu__list">
                            <div className="menu__list-item">Соискатель</div>
                            <div className="rectangle"></div>
                            <div className="menu__list-item active">Работодатель</div>
                            <div className="rectangle"></div>
                            <div className="menu__list-item">HR</div>
                        </div>
                        <div className="menu__list-item-accordion">
                            <div className="accordion-item">Соискателю</div>
                            <div className="accordion-icon">
                                <img src={vectorIcon} alt={vectorIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="menu__link">
                        <div className="menu__link-item">
                            <div className="menu__link-item-icon">
                                <img src={networkIcon} alt={networkIcon} />
                            </div>
                            <p className="menu__link-item-text">RU</p>
                            <div className="menu__link-item-icon">
                                <img src={vectorIcon} alt={vectorIcon} />
                            </div>
                        </div>
                        <div className="menu__link-item">Войти</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNavigation;
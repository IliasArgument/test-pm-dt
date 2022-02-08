import React from 'react';
import Checkbox from '../../form/Checkbox';
import studyMenuIcon from '../../../assets/menu-icon/study.png';
import './style.scss';


const FilterCheckbox = ({ items, title, isStudent }) => {
    return (

        <div className="content">
            <div className="content__info">{title}</div>
            <div className="content__border"></div>
            <ul className="content__items">
                {
                    items.map((item, i) => (
                        <li className="content__items-item" key={i}>
                            <div className="item-block">
                                <Checkbox title={item.title} name={item.name} />
                                <div className="number">{item.number}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {
                isStudent ? (
                    <div className="content__filter">
                        <img src={studyMenuIcon} alt={studyMenuIcon} />
                        <label htmlFor="box">Только студенты</label>
                        <input className="apple-switch" type="checkbox" id="box" />
                    </div>
                ) : ''
            }
        </div>
    );
};

export default FilterCheckbox;
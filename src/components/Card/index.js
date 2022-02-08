import React, { useState, useEffect, useRef, useCallback } from 'react';
import likeMenuIcon from '../../assets/menu-icon/like.png';
import dotsMenuIcon from '../../assets/menu-icon/dots.png';
import { formdDate } from '../../utils/date';
import './style.scss';
import Dropdown from '../Dropdown';
import Loader from '../Loader';
import { useSelector } from 'react-redux';


const Card = (props) => {
    const { firstName, experience, id, avatar } = props

    const { isLoading } = useSelector(state => state);

    const popupRef = useRef();
    const [activePopup, setActivePopup] = useState(false);

    const onHandleClickPopup = useCallback((e) => {
        if (popupRef?.current && !popupRef?.current.contains(e.target)) {
            setActivePopup(false);
        }
    }, [activePopup]);

    useEffect(() => {
        if (activePopup) {
            document.addEventListener('click', onHandleClickPopup, true);
        } else {
            document.removeEventListener('click', onHandleClickPopup, true);
        }
        return () => {
            document.removeEventListener('click', onHandleClickPopup, true);
        };
    }, [activePopup, onHandleClickPopup]);

    return (
        <div className="card">
            {isLoading ? <Loader /> : (
                <>
                    <div className="card__avatar">
                        {avatar ? <img src={avatar} alt={avatar} className="card__avatar" /> : ''}
                    </div>
                    <div className="card__info">
                        <p className="title">Продавец - консультант</p>
                        <div className="subtitle">
                            <p>{firstName ? firstName : 'Димон'}, 23 года<span className="location-icon"></span>Kyiv, Ukraine</p>
                        </div>
                        <div className="experience">
                            <ul className="experience__list">
                                {experience && experience.map(item => (
                                    <li className="experience__list-item" key={item.id}>
                                        <p>Координатор{' '}{item.company_name ? item.company_name : 'BALOX Agency'}{' '} - {formdDate(item.date_from, item.date_to)}</p>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="online">
                            <p className="online-text">Обновлено 9 минут назад </p>
                            <div><span className="online-icon"></span><span className="online-color">Онлайн</span></div>
                        </div>
                    </div>
                    <div className="card__btn-group">
                        <button type="button" className="btn like">
                            <img src={likeMenuIcon} alt={likeMenuIcon} />
                        </button>
                        <button type="button" className="btn dots" onClick={() => setActivePopup(true)}>
                            <img src={dotsMenuIcon} alt={dotsMenuIcon} />
                        </button>
                        <Dropdown popupRef={popupRef} activePopup={activePopup} />
                    </div>
                </>
            )
            }
        </div>
    );
};

export default Card;
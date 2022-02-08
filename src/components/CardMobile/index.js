import React, { useState, useEffect, useRef, useCallback } from 'react';
import likeMenuIcon from '../../assets/menu-icon/like.png';
import dotsMenuIcon from '../../assets/menu-icon/dots.png';
import { formdDate } from '../../utils/date';
import './style.scss';
import Dropdown from '../Dropdown';


const CardMobile = (props) => {
    const {
        firstName,
        experience,
        avatar
    } = props;

    const popupRef = useRef();
    const [activePopup, setActivePopup] = useState(false);

    const onHandleClickPopup = useCallback((e) => {
        if (popupRef?.current && !popupRef?.current.contains(e.target)) {
            setActivePopup(false);
        }
    }, [activePopup, popupRef]);

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
        <div className="card__mobile">

            <>
                <div className="card__mobile__first-section">
                    <div className="section__avatar">
                        {avatar ? <img src={avatar} alt={avatar} className="section__avatar" /> : ''}
                    </div>
                    <div className="section__info">
                        <p className="section__title">Продавец - консультант</p>
                        <div className="section__subtitle">
                            <p>{firstName ? firstName : 'Дима'}, 23 года</p>
                        </div>
                        <div><span className="section__location-icon"></span>Kyiv, Ukraine</div>
                    </div>
                </div>

                <div className="card__mobile__second-section">
                    <ul className="section__experience-list">
                        {experience && experience?.map(item => (
                            <li className="section__list-item" key={item.id}>
                                <p>Координатор{' '}{item.company_name ? item.company_name : 'BALOX Agency'}{' '} - {formdDate(item.date_from, item.date_to)}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card__mobile__third-section">
                    <div className="section__online">
                        <span className="section__online-icon"></span>
                        <span className="section__online-color">Онлайн</span>
                    </div>
                    <div className="section__btn">
                        <div>
                            <p className="section__online-text">Обновлено 9 минут назад </p>
                        </div>
                        <div className="section__btn-group">
                            <button type="button" className="button like">
                                <img src={likeMenuIcon} alt={likeMenuIcon} />
                            </button>
                            <button type="button" className="button dots" onClick={() => setActivePopup(true)}>
                                <img src={dotsMenuIcon} alt={dotsMenuIcon} />
                            </button>
                            <Dropdown popupRef={popupRef} activePopup={activePopup} cardModile />
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default CardMobile;
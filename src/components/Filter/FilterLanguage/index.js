import React, { useState } from 'react';
import Checkbox from '../../form/Checkbox';
import CheckboxRound from '../../form/CheckboxRound';

import vectorDownMenuIcon from '../../../assets/menu-icon/vector-down.png';



import russiaMenuIcon from '../../../assets/menu-icon/russia.png';
import polandMenuIcon from '../../../assets/menu-icon/poland.png';
import spainMenuIcon from '../../../assets/menu-icon/spain.png';
import ukrMenuIcon from '../../../assets/menu-icon/ukr.png';
import usaMenuIcon from '../../../assets/menu-icon/usa.png';
import germanyMenuIcon from '../../../assets/menu-icon/germany.png';


import './style.scss';

const FilterLanguage = () => {
    const [activeId, setActiveId] = useState('1');
    const [active, setActive] = useState(false);


    const handleClick = (e) => {
        const { value } = e.target;
        setActiveId(value);
        setActive(!active)
    }
    return (
        <div className="content">
            <div className="content__info">Владение языками</div>
            <div className="content__border"></div>
            <ul className="content__items">
                <li className="content__items-item">

                    <div className="accordion">
                        <div className="accordion__item">
                            <div className={`accordion__item-trigger`}>
                                <Checkbox
                                    title="Английский"
                                    icon={usaMenuIcon}
                                    language
                                    handleClick={handleClick}
                                    value={'1'}
                                    name="language"
                                />
                                <div className="number">602</div>
                                <div className={`trigger-img ${activeId === '1' ? 'active' : ''}`}><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>
                            <div className={`accordion__item-content ${activeId === '1' ? 'active' : ''}`}>
                                <ul>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(А1) – начальный</p>
                                        <div className="number">73</div>
                                    </li>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(А2) – ниже среднего</p>

                                        <div className="number">73</div>
                                    </li>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(В1) – средний</p>

                                        <div className="number">73</div>
                                    </li>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(А1) – начальный</p>
                                        <div className="number">73</div>
                                    </li>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(C1) – продвинутый</p>
                                        <div className="number">73</div>
                                    </li>
                                    <li>
                                        <div><CheckboxRound /></div>
                                        <p className="title-text">(C2) – профессиональный уровень владения</p>
                                        <div className="number">73</div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </li>

                <li className="content__items-item">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__item-trigger">
                                <Checkbox title="Русский" icon={russiaMenuIcon} language value="2" handleClick={handleClick} name="language" />
                                <div className="number">602</div>
                                <div className="trigger-img"><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>

                            <div className="accordion__item-content"></div>

                        </div>
                    </div>
                </li>
                <li className="content__items-item">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__item-trigger">
                                <Checkbox title="Украинский" icon={ukrMenuIcon} language value="3" handleClick={handleClick} name="language" />
                                <div className="number">602</div>
                                <div className="trigger-img"><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>

                            <div className="accordion__item-content"></div>

                        </div>
                    </div>
                </li>
                <li className="content__items-item">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__item-trigger">
                                <Checkbox title="Немецкий" icon={germanyMenuIcon} language value="4" handleClick={handleClick} name="language" />
                                <div className="number">602</div>
                                <div className="trigger-img"><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>

                            <div className="accordion__item-content"></div>

                        </div>
                    </div>
                </li>
                <li className="content__items-item">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__item-trigger">
                                <Checkbox title="Польский" icon={polandMenuIcon} language value="5" handleClick={handleClick} name="language" />
                                <div className="number">602</div>
                                <div className="trigger-img"><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>

                            <div className="accordion__item-content"></div>

                        </div>
                    </div>
                </li>
                <li className="content__items-item">
                    <div className="accordion">
                        <div className="accordion__item">
                            <div className="accordion__item-trigger">
                                <Checkbox title="Испанский" icon={spainMenuIcon} language value="6" handleClick={handleClick} name="language" />
                                <div className="number">602</div>
                                <div className="trigger-img"><img src={vectorDownMenuIcon} alt={vectorDownMenuIcon} /></div>
                            </div>

                            <div className="accordion__item-content"></div>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FilterLanguage;
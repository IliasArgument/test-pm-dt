import React from 'react';
import markIcon from '../../../assets/menu-icon/mark.png';
import './style.scss';

const Checkbox = ({ title, language, icon, handleClick, value, name }) => {

    return (
        <div>
            <label className="custom-checkbox">
                <input className="hidden-checkbox" type="radio" name={name} value={value} defaultChecked={value === '1'} onChange={handleClick} />
                <div className="checkbox">
                    <img src={markIcon} alt={markIcon} className="checkmark" />
                </div>
                <span className="label-text">
                    {language ? <img src={icon} alt={icon} /> : ''}
                    {title}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;
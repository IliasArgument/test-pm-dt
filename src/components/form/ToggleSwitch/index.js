import React from 'react';
import './style.scss';

const ToggleSwitch = ({ onToggleChange, toggle }) => {
    return (
        <>
            <label htmlFor="box">Только с фотографией</label>
            <input className="apple-switch" type="checkbox" id="box" checked={toggle} onChange={(e) => onToggleChange(e.target.checked)} />
        </>
    );
};

export default ToggleSwitch;
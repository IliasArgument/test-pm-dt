import React, { useState } from 'react';
import RangeInput from '../../form/RangeInput';
import ToggleSwitch from '../../form/ToggleSwitch';
import './style.scss';

const FilterRange = ({ title, value, onHandleChangeAge, setValue, salary, text }) => {
    const [isToggleSalary, setIsToggleSalary] = useState(false);

    return (
        <div className="content">
            <div className="content__info">{title}</div>
            <div className="content__border"></div>
            <div className="content__range">
                <RangeInput values={value} setValues={setValue} onChange={onHandleChangeAge} salary={salary} />
            </div>
            <div className="content__sort__age">
                <span className="sort-text">от</span>
                <div className="sort__age">
                    <div className="from">{value[0]}</div>
                </div>
                <span className="sort-text">до</span>
                <div className="sort__age">
                    <div className="to">{value[1]}</div>
                </div>
                <span className="sort-text">{text}</span>
            </div>
            {salary ? (
                <div className="content__checkbox">
                    <ToggleSwitch toggle={isToggleSalary} onToggleChange={setIsToggleSalary} />
                </div>
            ) : ''}
        </div>
    );
};

export default FilterRange;
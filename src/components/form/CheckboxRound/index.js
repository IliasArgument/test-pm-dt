import React from 'react';
import './style.scss';


const CheckboxRound = ({ title }) => {
    return (
        <div>
            <label className="label">
                <input type="checkbox" value="checked" className="input" />
                <span className="text">
                    {/* {title} */}
                    </span>
            </label>
        </div>
    );
};

export default CheckboxRound;
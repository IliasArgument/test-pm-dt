import React from 'react';
import './style.scss';

const Loader = () => {
    return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};

export default Loader;
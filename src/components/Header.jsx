import React from 'react';
import { Link } from 'react-router-dom';
import ko from '../assets/images/ko.png';

const Header = () => {
    return (
        <header className="header">
            <a className="header--logo">
                {/* <img src={ko} alt="OK" style={{width:'35px'}}/> */}
                <p>Kenneth Obok</p>
            </a>
            <div className="header--nav-toggle">
                <span></span>
            </div>
        </header>
    );
};

export default Header;
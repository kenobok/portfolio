import React from 'react';
import { Link } from 'react-router-dom';
import ko from '../assets/images/ko.png';

const Header = () => {
    return (
        <header className="header">
            <a className="header--logo">
                {/* <img src={ko} alt="OK" style={{width:'35px'}}/> */}
                <p>Obok Kenneth</p> <i className="fas fa-caret-right mx-2" style={{ marginTop:'3px' }}></i> <small id="cur_tab" style={{ marginTop:'3px' }}>Home</small>
            </a>
            <div className="header--nav-toggle">
                <span></span>
            </div>
        </header>
    );
};

export default Header;
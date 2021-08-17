import React from 'react';
import HeaderLogo from "./Header-logo";
import HeaderNavbar from "./Header-navbar";

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-wrapper">
                    <HeaderLogo />
                    <HeaderNavbar />
                </div>
            </div>
        </div>
    );
};

export default Header;
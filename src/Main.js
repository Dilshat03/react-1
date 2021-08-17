import React from 'react';
import MainCard from "./Main-card";

const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-section">
                    <h2 className="main-title">
                        Shop
                    </h2>
                    <p className="main-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <MainCard />
        </div>
    );
};

export default Main;
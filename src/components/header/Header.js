import React from "react";
import './Header.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    return (
        <header className={`header ${black ? 'header--black' : ''}`}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://files.passeidireto.com/f776e7de-e18d-4b55-a668-a5ca608cb864/f776e7de-e18d-4b55-a668-a5ca608cb864.png" alt="Usuario" />
                </a>
            </div>
        </header>
    )
}
import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        document.querySelector('nav').classList.toggle('menu-visible');
    };

    const hideMenu = () => {
        setMenuVisible(false);
    };

    return (
        <>
            <header>
                <nav className={menuVisible ? 'menu-visible' : ''}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={hideMenu}>
                                Unité centrale
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Mesprojets" onClick={hideMenu}>
                                Mes projets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Maconfig" onClick={hideMenu}>
                                Ma config
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <img className='touch' src={process.env.PUBLIC_URL + '/images/touch.webp'} alt="menu"></img>
                </div>
            </header>
        </>
    );
}

export default Header;

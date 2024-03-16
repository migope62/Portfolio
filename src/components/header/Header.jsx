import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        document.querySelector('.touch').classList.toggle('touch-visible');
    };

    const hideMenu = () => {
        setMenuVisible(false);
        document.querySelector('.touch').classList.remove('touch-visible');
    };

    return (
        <>
            <header>
                <nav className={menuVisible ? 'menu-visible' : ''} onClick={hideMenu}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={hideMenu}>
                                Présentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Mesprojets" onClick={hideMenu}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Maconfig" onClick={hideMenu}>
                                Expertise
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={`menu-toggle ${menuVisible ? 'touch-visible' : ''}`} onClick={toggleMenu}>
                    <img className='touch' src={process.env.PUBLIC_URL + '/images/touch.webp'} alt="menu"></img>
                </div>
            </header>
        </>
    );
}


export default Header;

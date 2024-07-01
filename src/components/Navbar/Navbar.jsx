import React, {useState} from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'


const Navbar = () => {
   const [openNav, setOpenNav] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(''); 

   const toggleNav = () => {
        setOpenNav(!openNav);
        setOpenDropdown('');
   };

   const handleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? '' : dropdownName);
    };

    const navList = () => {
        return (
            <>
            <div className="nav-item"
            onMouseEnter={() => handleDropdown('about')}
            onMouseLeave={() => handleDropdown('')}
            onClick={() => handleDropdown('about')}>
                <div className="nav-link">
                    About
                </div>
                {openDropdown === 'about' && (
                    <div className="dropdown">
                        <NavLink to="/">About Us</NavLink>
                        <NavLink to="/about">Board</NavLink>
                        <NavLink to="/about">Philantrophy</NavLink>
                    </div>
                )}
            </div>
            <div className="nav-item"
            onMouseEnter={() => handleDropdown('mayuri')}
            onMouseLeave={() => handleDropdown('')}
            onClick={() => handleDropdown('mayuri')}>
                <div className="nav-link">
                    Mayuri 2024
                </div>
                {openDropdown === 'mayuri' && (
                    <div className="dropdown">
                        <NavLink to="/mayuri">Competition</NavLink>
                        <NavLink to="/mayuri">Media</NavLink>
                    </div>
                )}
            </div>
            <div className="nav-item">
                <NavLink to="/sponsorship" className="nav-link">Sponsorship</NavLink>
            </div>
            </>
        );
    };


  return (
    <div className="navbar-container">
        <nav className={`navbar ${openNav ? 'open' : ''}`}>
            <div className="navbar-logo">
                <img src={logo} alt="Logo"/>
            </div>

            <button className='hamburger' onClick={toggleNav}>
                <img src={menuIcon} alt="Menu"/>
            </button>

            <div className={`nav-links ${openNav ? 'open' : ''}`}>
                {navList()}
            </div>
        </nav>
    </div>
    )
}


export default Navbar
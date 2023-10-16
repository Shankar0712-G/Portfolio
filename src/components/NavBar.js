import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

  return (
    <nav>
    <div className="Icon">
        <a href="">
        <img src={logo} alt="Icon" />
        </a>
    </div>
    <div className="list-items">
        <li>
        <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
            Home
        </a>
        </li>
        <li>
        <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
            Skills
        </a>
        </li>
        <li>
        <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
            Projects
        </a>
        </li>
        <li>
        <a href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
            Contact
        </a>
        </li>
    </div>
    <div className="social-icon ms-auto">
        <a href="https://www.linkedin.com/" target='_blank'>
        <img src={navIcon1} alt="" />
        </a>
        <a href="https://www.facebook.com/" target='_blank'>
        <img src={navIcon2} alt="" />
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
        <img src={navIcon3} alt="" />
        </a>
    </div>
    </nav>
  );
};

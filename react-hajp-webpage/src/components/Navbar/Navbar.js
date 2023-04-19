import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes, FaInstagram} from "react-icons/fa";
import {useRef} from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")  //svaki put kd se funkc pozove; doda se ili makne ta klasa na nav
  }

  return (
    <header>
      <img src={require('../images/HajpLogo.png')} />
      <nav ref={navRef}>
        <Link to="/" data-replace="Početna"><span>Početna</span></Link>
        <CustomLink to="/Booking" data-replace="Booking i Upisi"><span>Booking i Upisi</span></CustomLink>
        <CustomLink to="/Members" data-replace="Treneri i Članovi"><span>Treneri i Članovi</span></CustomLink>
        <CustomLink to="/Zepelin" data-replace="Zepelin"><span>Zepelin</span></CustomLink>
        <CustomLink to="/Gallery" data-replace="Galerija"><span>Galerija</span></CustomLink>
        <CustomLink to="/Hajp" data-replace="Hajp Party"><span>Hajp Party</span></CustomLink>
        <CustomLink to="/About" data-replace="O nama"><span>O nama</span></CustomLink>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )

}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
    <Link className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  )
}

export default Navbar

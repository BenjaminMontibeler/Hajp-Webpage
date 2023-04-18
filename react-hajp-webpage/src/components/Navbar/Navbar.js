import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes, FaInstagram} from "react-icons/fa";
import {useRef} from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")  //svaki put kd se funkc pozove; doda se ili makne ta klasa na nav
  }

  return (
    <header>
      <img src={require('../images/HajpLogo.png')} />
      <nav ref={navRef}>
        <a href="#" data-replace="Početna"><span>Početna</span></a>
        <a href="#" data-replace="Booking i Upisi"><span>Booking i Upisi</span></a>
        <a href="#" data-replace="Treneri i Članovi"><span>Treneri i Članovi</span></a>
        <a href="#" data-replace="Zepelin"><span>Zepelin</span></a>
        <a href="#" data-replace="Galerija"><span>Galerija</span></a>
        <a href="#" data-replace="Hajp Party"><span>Hajp Party</span></a>
        <a href="#" data-replace="O nama"><span>O nama</span></a>
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

export default Navbar

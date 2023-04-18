import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")  //svaki put kd se funkc pozove; doda se ili makne ta klasa na nav
  }

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="#">Početna</a>
        <a href="#">Booking i Upisi</a>
        <a href="#">Treneri i Članovi</a>
        <a href="#">Zepelin</a>
        <a href="#">Galerija</a>
        <a href="#">Hajp Party</a>
        <a href="#">O nama</a>
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

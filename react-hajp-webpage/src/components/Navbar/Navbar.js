import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes, FaInstagram} from "react-icons/fa";
import {useRef} from "react";
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")  //svaki put kd se funkc pozove; doda se ili makne ta klasa na nav
  }

  // const [navBg, setNavBg] = React.useState("#4f2849");
  // const location = useLocation();
  // React.useEffect(() => {
  //   if (window.location.pathname === "/Zepelin") {
  //     setNavBg("black");
  //   } else {
  //     setNavBg('#4f2849')
  //   }
  // }, [location]);

  return (
    <header>
      <img src={require('../images/HajpLogo.png')} />
      <nav ref={navRef}>
        <Link to="/" data-replace="Početna"><span>Početna</span></Link>
        <CustomLink to="/Programs" data-replace="Programi i Upis"><span>Programi i Upis</span></CustomLink>
        <CustomLink to="/Members" data-replace="Treneri"><span>Treneri</span></CustomLink>
        <CustomLink to="/Zepelin" data-replace="Zepelin"><span>Zepelin</span></CustomLink>
        <CustomLink to="/Gallery" data-replace="Galerija"><span>Galerija</span></CustomLink>
        <CustomLink to="/HajpParty" data-replace="Hajp Party"><span>Hajp Party</span></CustomLink>
        <CustomLink to="/Booking" data-replace="Booking i Upiti"><span>Booking i Upiti</span></CustomLink>
        <CustomLink to="/About" data-replace="O nama"><span>O nama</span></CustomLink>
        <a href='https://www.instagram.com/hajpos/' className='instagram-logo-a'><FaInstagram className='ig-logo'/></a>
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

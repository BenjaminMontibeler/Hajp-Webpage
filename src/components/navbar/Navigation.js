import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import { useRef } from "react";
import { Link, useMatch, useResolvedPath, useNavigate, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { projectAuth } from '../config/firebase';
import { useEffect, useState } from 'react';

function Navigation() {

  const [user, setUser] = useState(null);
  const navRef = useRef();
  // const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    projectAuth.signOut().then(() => {
      history('/Login');
    });
  };

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsNavbarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

return (
  <Navbar collapseOnSelect expand="lg" bg="black" variant='dark' className='navbar gap-3 px-3 py-0' ref={navRef} expanded={!isNavbarCollapsed}>

    <CustomLink to="/"><img src={require('../images/HajpLogo.png')} className='img-nav' /></CustomLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="flex-grow-1 justify-content-evenly">
        <CustomLink to="/Programi" data-replace="Programi i Upis"><span>Programi i Upisi</span></CustomLink>
        <CustomLink to="/Treneri" data-replace="Treneri"><span>Treneri</span></CustomLink>
        <CustomLink to="/Zepelin" data-replace="Zepelin"><span>Zepelin</span></CustomLink>
        <CustomLink to="/Galerija" data-replace="Galerija"><span>Galerija</span></CustomLink>
        <CustomLink to="/Party" data-replace="Hajp Party"><span>Hajp Party</span></CustomLink>
        <CustomLink to="/Booking" data-replace="Booking i Upiti"><span>Booking i Upiti</span></CustomLink>
        <CustomLink to="/About" data-replace="O nama"><span>O nama</span></CustomLink>
        {!user &&
          <CustomLink to="/Login" data-replace="Log in"><span>Log in</span></CustomLink>
        }
        {user &&
          <div className='logged-div'>
            <CustomLink to="/Profile"><FaUser /></CustomLink>
            <a className='logout-btn' onClick={logout} data-replace="Log out"><span>Log out</span></a>
          </div>
        }
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  )
}

export default Navigation

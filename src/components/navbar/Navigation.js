import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import { useRef } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { projectAuth } from '../config/firebase';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

      <Link to="/" className="align-items-center text-center"><img src={require('../images/HajpLogo.png')} className='img-nav' /></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-grow-1 justify-content-evenly">
          <Link to="/Programi" data-replace="Programi i Upis"><span>Programi i Upisi</span></Link>
          <Link to="/Treneri" data-replace="Treneri"><span>Treneri</span></Link>
          <Link to="/Zepelin" data-replace="Zepelin"><span>Zepelin</span></Link>
          <Link to="/Galerija" data-replace="Galerija"><span>Galerija</span></Link>
          <Link to="/Party" data-replace="Hajp Party"><span>Hajp Party</span></Link>
          <Link to="/Booking" data-replace="Booking i Upiti"><span>Booking i Upiti</span></Link>
          <Link to="/About" data-replace="O nama"><span>O nama</span></Link>
          {!user &&
            <Link to="/Login" data-replace="Prijavi se"><span>Prijavi se</span></Link>
          }
          {user &&
            <div className='logged-div'>
              <Link to="/Profile"><FaUser /></Link>
              <a className='logout-btn' onClick={logout} data-replace="Odjavi se"><span>Odjavi se</span></a>
            </div>
          }
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link to={to} {...props}>
//       <span className={isActive ? "active" : ""}>{children}</span>
//     </Link>
//   );
// }

export default Navigation

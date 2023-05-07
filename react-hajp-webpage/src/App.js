import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import BookingPage from './components/pages/BookingPage';
import MembersPage from './components/pages/MembersPage';
import ZepelinPage from './components/pages/ZepelinPage';
import Gallery from './components/pages/Gallery';
import PartyPage from './components/pages/PartyPage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/Footer/Footer';
import Programi from './components/pages/Programi';
import { useLocation } from 'react-router-dom';

function App() {

  // const [bg, setBg] = React.useState("white");
  // const location = useLocation();
  // React.useEffect(() => {
  //   if (window.location.pathname === "/Hajp") {
  //     setBg("url(D:\git\Hajp-Webpage\react-hajp-webpage\src\components\images\HajpParty-4.jpg)");
  //   } else {
  //     setBg('black')
  //   }
  // }, [location]);

  return (
    <div className="App" >
      <React.Fragment>
        <Navbar />
      </React.Fragment>

      <div className='main_container'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Programs' element={<Programi />} />
          <Route path='/Booking' element={<BookingPage />} />
          <Route path='/Members' element={<MembersPage />} />
          <Route path='/Zepelin' element={<ZepelinPage />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/HajpParty' element={<PartyPage />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;

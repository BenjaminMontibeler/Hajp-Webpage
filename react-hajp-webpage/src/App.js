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

function App() {
  return (
    <div className="App">
      {/* <React.Fragment> */}
        <Navbar />
      {/* </React.Fragment> */}

      <div className='main_container'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Booking' element={<BookingPage />} />
          <Route path='/Members' element={<MembersPage />} />
          <Route path='/Zepelin' element={<ZepelinPage />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Hajp' element={<PartyPage />} />
          <Route path='/About' element={<AboutPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

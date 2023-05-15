import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar/Navigation';
import Pocetna from './components/pages/Pocetna';
import Programi from './components/pages/Programi';
import Booking from './components/pages/Booking';
import Treneri from './components/pages/Treneri';
import Zepelin from './components/pages/Zepelin';
import Galerija from './components/pages/Galerija';
import Party from './components/pages/Party';
import About from './components/pages/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
          <Route path='/' element={<Pocetna />} />
          <Route path='/Programi' element={<Programi />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/Treneri' element={<Treneri />} />
          <Route path='/Zepelin' element={<Zepelin />} />
          <Route path='/Galerija' element={<Galerija />} />
          <Route path='/Party' element={<Party />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

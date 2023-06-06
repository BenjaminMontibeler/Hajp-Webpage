import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar/Navigation';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Pocetna from './components/pages/Pocetna';
import Programi from './components/pages/Programi';
import Booking from './components/pages/Booking';
import Treneri from './components/pages/Treneri';
import Zepelin from './components/pages/Zepelin';
import Galerija from './components/pages/Galerija';
import Party from './components/pages/Party';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import { projectAuth, projectFirestore } from './components/config/firebase';

export class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    projectAuth.onAuthStateChanged(user => {
      if (user) {
        projectFirestore.collection('Users').doc(user.uid).get().then(snapshot => {
          this.setState({
            user: snapshot.data().name
          }, () => {
            this.forceUpdate();
          });
        });
      } else {
        this.setState({
          user: null
        }, () => {
          this.forceUpdate();
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation user={this.state.user} />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/Programi" element={<Programi user={this.state.user} />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Treneri" element={<Treneri />} />
          <Route path="/Zepelin" element={<Zepelin />} />
          <Route path="/Galerija" element={<Galerija />} />
          <Route path="/Party" element={<Party />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile user={this.state.user} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;

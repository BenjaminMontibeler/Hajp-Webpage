import React, { useEffect, useState } from 'react';
import '../pages_styles/Pocetna.css';
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AOS from 'aos'

function Pocetna() {
  const navigate = useNavigate();
  const link1 = "https://firebasestorage.googleapis.com/v0/b/hajp-website.appspot.com/o/Plesni%20Stilovi%2Fvogue.jpg?alt=media&token=b6f7a402-6b0d-4fec-861d-d386dfffa338&_gl=1*1oqsirx*_ga*MjExMTg4ODkyMi4xNjgwMjAwNjEy*_ga_CW55HF8NVT*MTY4NjE0MTM4OC4zMC4xLjE2ODYxNDE0MDUuMC4wLjA.";
  const link2 = "https://firebasestorage.googleapis.com/v0/b/hajp-website.appspot.com/o/Plesni%20Stilovi%2Fhiphop.jpg?alt=media&token=e470bb61-3115-4b0d-ab8d-a0994ce090cb&_gl=1*1um90kg*_ga*MjExMTg4ODkyMi4xNjgwMjAwNjEy*_ga_CW55HF8NVT*MTY4NjE0MTM4OC4zMC4xLjE2ODYxNDI0MDUuMC4wLjA.";
  const link3 = "https://firebasestorage.googleapis.com/v0/b/hajp-website.appspot.com/o/Plesni%20Stilovi%2Fbreakdance.jpg?alt=media&token=d8622807-8aca-42ac-aef0-5d719a7282be&_gl=1*17bg011*_ga*MjExMTg4ODkyMi4xNjgwMjAwNjEy*_ga_CW55HF8NVT*MTY4NjE0MTM4OC4zMC4xLjE2ODYxNDI0MDguMC4wLjA.";

  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  const handleLoginRedirect2 = () => {
    navigate('/About');
  };

  const handleLoginRedirect3 = () => {
    navigate('/Programi');
  };

  const handleLoginRedirect4 = () => {
    navigate('/Party');
  };

  const handleLoginRedirect5 = () => {
    navigate('/Booking');
  };

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 2000
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on reload or refresh
    window.scrollTo(0, 0);
  }, []);

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date('2023-06-26'); // Replace with your desired date
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='main-page-container container-fluid'>
      <div className='container-1'>
        <div className='row justify-content-end h-100'>
          <div className='col-6 h-100'>
            <div className='row'>
              <div className='main-title h-100' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
                <div className='text-end padding-div'>
                  <h1 className=''>Želiš postati profesionalni plesač?</h1>
                  <h3 className=''>Upiši se i postani dio plensog studija Hajp</h3>
                  <button onClick={handleLoginRedirect}>Upiši se</button>
                </div>
                <br /><br /><br />
                <h3>O nama</h3>
                <p>Hajp je novoformirani plesni studio od strane dvoje studenata osječke akademije. S mnogo godina plesnog iskustva i znanja,
                  garantiramo profesionalno plesno okruženje i siguran napredak.
                </p>
                <a onClick={handleLoginRedirect2}>Pročitaj više <FaLongArrowAltRight /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid d-flex justify-content-center row main-content-1'>
        <img src={link1} className='image-title-main' data-aos="fade-right" data-aos-offset="200" data-aos-once="true" />
        <img src={link2} className='image-title-main' data-aos="fade-down" data-aos-offset="200" data-aos-once="true" />
        <img src={link3} className='image-title-main' data-aos="fade-left" data-aos-offset="200" data-aos-once="true" />
        <h2 className='text-center w-100 h-100'>
          <a onClick={handleLoginRedirect3}>Plesni Programi <FaLongArrowAltRight /></a>
        </h2>
      </div>
      <div className='main-hajp row' onClick={handleLoginRedirect4}>
        <h1 className='party-title-main text-center my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">HAJP PARTY</h1>
        <div className="countdown-container-main" data-aos="fade-down" data-aos-offset="200" data-aos-once="true">
          <div className="countdown-item-main">
            <span className="countdown-value-main">{countdown.days}</span>
            <span className="countdown-label-main">Dani</span>
          </div>
          <div className="countdown-item-main">
            <span className="countdown-value-main">{countdown.hours}</span>
            <span className="countdown-label-main">Sati</span>
          </div>
          <div className="countdown-item-main">
            <span className="countdown-value-main">{countdown.minutes}</span>
            <span className="countdown-label-main">Minute</span>
          </div>
          <div className="countdown-item-main">
            <span className="countdown-value-main">{countdown.seconds}</span>
            <span className="countdown-label-main">Sekunde</span>
          </div>
        </div>
      </div>

      <div className='row justify-content-center text-center booking-main'>
        <h5 data-aos="fade-down" data-aos-offset="200" data-aos-once="true">
          Tražite plesače sa nastup, spot, zabavu ili reklamu? Ili pak imate pitanja vezana za upise i termine.
          Za sve upite kliknite ovdje!
        </h5>
        <br/><br/><br/>
        <h3 data-aos="fade-down" data-aos-offset="200" data-aos-once="true">
          <a onClick={handleLoginRedirect5}>Booking i upiti <FaLongArrowAltRight /></a></h3>
      </div>

    </div>

  )
}

export default Pocetna
import React, {useEffect} from 'react'
import '../pages_styles/Booking.css'
import AOS from 'aos';

function Booking() {

  useEffect(() => {
    // Scroll to the top of the page on reload or refresh
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 2000
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  return (
    <div className='booking-container container-fluid'>
      {/* <h1 className='booking-title'>Booking</h1> */}
      <div className='row justify-content-evenly h-100'>
        <div className='col booking-text h-100 d-flex align-items-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <p>Tražite plesače sa nastup, spot, zabavu ili reklamu? Ili pak imate pitanja vezana za upise i termine.
            Ovdje možete poslati upite! Pošaljite nam ime, prezime te e-mail i pobrinit ćemo se da vam odgovorimo u što kraćem roku.
          </p>
        </div>
        <div className='col d-flex my-auto' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
          <form className='row'>
            <input type='text' placeholder='Ime i Prezime' required />
            <input type='email' placeholder='E-mail' required />
            <input type='text' placeholder='Predmet' required />
            <textarea placeholder='Vaša poruka' required />
            <button type='submit'>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import '../pages_styles/About.css'

function About() {

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
    <div className='about-container container-fluid'>

      <div className='info-container container-fluid'>
        <div className='info-text' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <h2>Kako je nastao Plesni Studio Hajp?</h2>
          <p>Hajp je novonastali plesni studio osnovan prije od 3 godine od strane dvoje mladih plesača, trenera i studenata Josipa Bišćana 
            i Karle Mitrović. Josip i Karla bave se plesom više od 10 godina, dotakli su se mnogih plesnih stilova, sudjelovali u brojnim
            nastupima, natjecanjima, koreografirali spotove te osnivali plesne evente. Hajp je sam po sebi počeo kao plesni event u 
            lokalnom studentskom kafiću gdje su Karla i Josipa osjetili zainteresiranost mladih studenata za plesom. Danas se u plesnom studiju 
            realiziraju i programi obrazovanja koje je verificiralo Ministarstvo znanosti, obrazovanja i sporta.</p>
        </div>
      </div>

      <div className='info-container2 d-flex justify-content-center'>
        <div className='info-text2' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">
          <h2>Plesni Stilovi</h2>
          <p>Iako se hajp pretežito bavi urbanim plesnim stilovima poput Hip-hopa, Voguea, MTV-a i Break Dancea, 
            imamo dvije grupe koje se bave isključivo suvremenim tj. Jazz danceom i Latino plesovima.</p>
        </div>
      </div>

      <div className='info-container3 d-flex justify-content-between'>
        <div className='row w-100 info-padding'>
          <h2 data-aos="fade-right" data-aos-offset="200" data-aos-once="true">Dvorana</h2>
          <div className='row w-100'>
            <div className='col-6' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
              <img src={require('../images/lokacija.JPG')} className='img-fluid'></img>
            </div>
            <div className='col-6 d-flex my-auto location-info h-100' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
              <div className='row h-100 justify-content-evenly'>
                <div>
                  <p>Nalazimo se u ul. Ivana Gundulića 5, Osijek gdje raspolažemo s jednom velikom te 3 manje dvorane; 2 urbane i baletnom</p>
                </div>
                <div>
                  <h3>Kontakt</h3>
                  <span>E-mail: hajp@gmail.com</span><br></br>
                  <span>Telefon: 095 698 6689</span>
                </div>
                <div>
                  <h3>Pratite naš rad na društvenim mrežama</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100086255118054">
                        <i className="fab fa-facebook fa-lg"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/hajpos/">
                        <i className="fab fa-instagram fa-lg"></i> Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;
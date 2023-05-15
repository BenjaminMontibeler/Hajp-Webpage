import React from 'react'
import '../pages_styles/Party.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Party() {

  useEffect(() => {
    AOS.init(
      {duration:2000, 
      once: true});
    AOS.refresh();
    
  }, [])

  return (
    <div className='party-container'>
      <div className='container-fluid d-flex justify-content-center' data-aos="fade-down">
        <img src={require('../images/HajpParty-1.jpg')} className='image-title' />
        <img src={require('../images/HajpParty-2.jpg')} className='image-title' />
        <img src={require('../images/HajpParty-4.jpg')} className='image-title' />
      </div>
      <h1 className='party-title responsive-font-example' data-aos="fade-up">Hajp Party</h1>s

      <div className='party-content d-flex justify-content-between'>
        <img src={require('../images/HajpParty-6.jpg')} className='image-1 img-fluid' data-aos="fade-right" />
        <p className='description-1 my-auto justify-content-center' data-aos="fade-left">Svaki mjesec plesni studio Hajp, u suradnji s
          Campus Caffeom, organiriza tematski party "Hajp".</p>
      </div>

      <div className='party-content d-flex justify-content-between'>
        <p className='description-2 my-auto justify-content-center text-end' data-aos="fade-right">Plesaći iz svih osječkihi studija imaju priliku pokazati 
        svoje skillove i koreografije na Hajp Partiju. Nastupi variraju od individualnih do grupnih točaka, od Vogue-a 
        do Breakdance-a.</p>
        <img src={require('../images/HajpParty-8.jpg')} className='image-2 img-fluid' data-aos="fade-left"/>
      </div>

      <div className='party-content container-fluid'>
        <div className='row justify-content-space-evenly justify-content-center'>
          <img src={require('../images/HajpParty-9.jpg')} className='image-3 party-image img-fluid col-4' data-aos="fade-left"/>
          <img src={require('../images/HajpParty-10.jpg')} className='party-image img-fluid col-4' data-aos="fade-down"/>
          <img src={require('../images/HajpParty-12.jpg')} className='image-5 party-image img-fluid col-4' data-aos="fade-right"/>
          <p className='description-3 text-center' data-aos="fade-up">Od y2k-a, do Halloween-a, do Lip Sync-a, teme Hajpa nikad ne razočaraju.
          Ovisno o temi, dodjeluju se i nagrade, bilo to za najbolji kostim ili za najbolji nastup. Dođi u što boljem,
          autentičnom izadnju i osvoji cugu za sebe i svoju ekipu!</p>
        </div>
      </div>

    </div>
  )
}

export default Party

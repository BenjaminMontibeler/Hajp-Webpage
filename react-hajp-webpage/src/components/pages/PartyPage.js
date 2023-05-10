import React from 'react'
import "../pages_styles/PartyPage.css"

function PartyPage() {
  return (
    <div className='container'>
      <div className='title-container'>
        <div className='image-container'>
          <img src={require('../images/HajpParty-1.jpg')} className='image-title' />
          <img src={require('../images/HajpParty-2.jpg')} className='image-title' />
          <img src={require('../images/HajpParty-4.jpg')} className='image-title' />
        </div>
        <h1 className='title party-title'>Hajp Party</h1>
      </div>

      <div className='image-container contet-1'>
        <img src={require('../images/HajpParty-6.jpg')} className='image-1' />
        <p className='description-1'>Svaki mjesec plesni studio Hajp, u suradnji s Campus Caffeom, organiriza tematski party "Hajp".</p>
      </div>

      <div className='image-container contet-1'>
        <p className='description-2'>Plesaći iz svih osječkihi studija imaju priliku pokazati svoje skillove i koreografije na Hajp Partiju.
          Nastupi variraju od individualnih do grupnih točaka, od Vogue-a do Breakdance-a. </p>
        <img src={require('../images/HajpParty-8.jpg')} className='image-2' />
      </div>

      <div className='contet-2'>
        <div className='image-container img-cont2'>
          <img src={require('../images/HajpParty-9.jpg')} className='image-3 img1' />
          <img src={require('../images/HajpParty-10.jpg')} className='image-3' />
          <img src={require('../images/HajpParty-12.jpg')} className='image-3 img3' />
        </div>
        <p className='description-3'> Od y2k-a, do Halloween-a, do Lip Sync-a, teme Hajpa nikad ne razočaraju.
          Ovisno o temi, dodjeluju se i nagrade, bilo to za najbolji kostim ili za najbolji nastup. Dođi u što boljem,
          autentičnom izadnju i osvoji cugu za sebe i svoju ekipu! </p>
      </div>


      {/* <p>U suradnji s Campus Caffeom, plesni studio Hajp svaki mjesec organiziramo svoj Hajp Party.</p>
      <p>Cijeli koncept partija je da plesaći, kako iz Hajpa, tako i iz drugih plesnih studija, pokažu svoje koreografije i skillove.</p>
      <p>Svaki mjesec mjenja se tema partija, tako smo imali Halloween Hajp, Villain Era Hajp, y2k Hajp, Branded Hajp...</p>
      <p>Klikni ovdje kako ne bi propustio sljedeći party! :)</p> */}
    </div>
  )
}

export default PartyPage

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

        <div className='image-container contet-1'>
          <img src={require('../images/HajpParty-6.jpg')} className='image-1' />
          <p className='description'>Svaki mjesec plesni studio Hajp, u suradnji s Campus Caffeom, organiriza tematski party "Hajp".</p>
        </div>

        <div className='image-container contet-1'>
          <p className='description'>Svaki mjesec plesni studio Hajp, u suradnji s Campus Caffeom, organiriza tematski party "Hajp".</p>
          <img src={require('../images/HajpParty-8.jpg')} className='image-2' />
        </div>
      </div>

      {/* <p>U suradnji s Campus Caffeom, plesni studio Hajp svaki mjesec organiziramo svoj Hajp Party.</p>
      <p>Cijeli koncept partija je da plesaći, kako iz Hajpa, tako i iz drugih plesnih studija, pokažu svoje koreografije i skillove.</p>
      <p>Svaki mjesec mjenja se tema partija, tako smo imali Halloween Hajp, Villain Era Hajp, y2k Hajp, Branded Hajp...</p>
      <p>Klikni ovdje kako ne bi propustio sljedeći party! :)</p> */}
    </div>
  )
}

export default PartyPage

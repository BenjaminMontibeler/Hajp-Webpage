import React from 'react'
import '../pages_styles/BookingPage.css'

function BookingPage() {
  return (
    <div className='booking-page'>
      <h1 className='title'>Booking i Upiti</h1>
      <div className='location-container'>
        <div className='map-container'>
        </div>
        <div className='map-information-container'>
          <h2>Lokacija</h2>
          <br></br>
          <p className='text-color'>
            Plesni studio Hajp nalazi se u ulici Ivana Gundulića 5, na 3. katu.<br></br>
            Raspolažemo s 3 novouređene dvorane.
          </p>
          <p className='location-info'>
            Ivana Gundulića 5, 3. kat<br></br>
            Osijek 31000<br></br>
            Hrvatska
          </p>
        </div>
      </div>

      <div className='booking-form'>
        <div className='booking-form-information'>
          <h2>Kontakt</h2>
          <br></br>
          <p className='text-color'>
            Tražite plesaće za spotove, reklame, zabave ili koncerte?<br></br>
            Ili možda želite postat dio našeg tima?
            Ovdje možete poslati svoje upite! Ispunite formural sa svojim E-mailom, imenom i prezimenom i potrudit ćemo se da
            Vam odgovorimo na sva pitanja u što kraćem roku!
          </p>
        </div>
        
        <form>
          <div className='form-div'>
            <input type='text' placeholder='Ime i Prezime'></input>
            <input type='email' placeholder='Vaš E-mail'></input>
          </div>
          <div className='form-div-2'>
            <input type='text' placeholder='Predmet'></input>
            <textarea type='text' placeholder='Vaša poruka'></textarea>
            <input type='submit' placeholder='Pošalji'></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingPage

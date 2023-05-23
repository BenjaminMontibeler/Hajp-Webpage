import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../pages_styles/Galerija.css';
import useFirestore from '../hooks/useFirestore.js';
import AOS from 'aos'

function Galerija() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { docs } = useFirestore('Produkcija');
  console.log(docs);

  useEffect(() => {

    window.addEventListener('load', function() { AOS.init(
      {duration:1800,
      once: true}); });
    
    AOS.refresh();
  }, []);

  return (
    <div className='container-fluid gallery-container'>

      <h1 className='album-title text-center'>PRODUKCIJA</h1>

      <div className='row justify-content-around'>

        {docs && docs.map(doc => (

          <div className='col-4 img-column' key={doc.id}>

            <img
              className="img-fluid"
              src={doc.url}
              alt="uploaded pic"
              data-aos="fade-right"
            />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Galerija

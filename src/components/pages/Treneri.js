import React, {useEffect} from 'react'
import '../pages_styles/Treneri.css'
import AOS from 'aos';

function Treneri() {

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 1000
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  return (
    <div className='trainers-container container-fluid'>
      <div className='row coach-info first' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
        <div className='col-4'>
          <img src={require('../images/Josip.JPG')} className='img-fluid' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"></img>
        </div>
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"> 
          hjabnfdjhaebnja
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          efjkdsnfkjenf
        </div>
        <div className='col-4'>
        <img src={require('../images/Karla.jpg')} className='img-fluid' data-aos="fade-right" data-aos-offset="200" data-aos-once="true"></img>
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
        <div className='col-4'>
          <img src={require('../images/Benjamin.jpeg')} className='img-fluid' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"></img>
        </div>
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
          hjabnfdjhaebnja
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          efjkdsnfkjenf
        </div>
        <div className='col-4'>
        <img src={require('../images/Dino.JPG')} className='img-fluid' data-aos="fade-right" data-aos-offset="200" data-aos-once="true"></img>
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
        <div className='col-4'>
          <img src={require('../images/Romana.JPG')} className='img-fluid' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"></img>
        </div>
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
          hjabnfdjhaebnja
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          efjkdsnfkjenf
        </div>
        <div className='col-4'>
        <img src={require('../images/Lana.jpg')} className='img-fluid' data-aos="fade-right" data-aos-offset="200" data-aos-once="true"></img>
        </div>
      </div>
      
    </div>
  )
}

export default Treneri

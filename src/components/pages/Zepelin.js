import React from 'react'
import '../pages_styles/Zepelin.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Zepelin() {

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 2000
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  return (

    <div className='container-fluid title-container'>
      <h1 className='zep-title d-flex justify-content-center text-center responsive-font-example' 
      data-aos="fade-in" data-aos-offset="200" data-aos-once="true">&nbsp;Zepelin</h1>

      <div class="row justify-content-center zepelin-container-1">
        <div class="col-8"><img src={require('../images/zepelin-3.jpeg')} className='img-fluid' data-aos="fade-down-right" data-aos-offset="200" data-aos-once="true"></img></div>
        <div class="col-3 d-flex my-auto zepelin-text-1" data-aos="fade-down-right" data-aos-offset="200" data-aos-once="true">Zepelin je vodeća i najstarija grupa unutar plesnog studija Hajp.
          Grupa se sastoji od 15 članova koji pretežito plešu hip-hop uz elemente vogue-a, popping-a, mtv-a i suvremenog.</div>
      </div>

      <div class="row justify-content-center zepelin-container-2">
        <div class="col-3 d-flex my-auto zepelin-text-2 text-end" data-aos="fade-down-left" data-aos-offset="200" data-aos-once="true">Iako osnovana prije svega 4 godine, plesna grupa nastupala je na 
        brojnim eventima u Slavoniji kao što su Ferivi maraton, Hang-Loose 60s party, plesni kamp u Orahovici te mnogim drugim.</div>
        <div class="col-8"><img src={require('../images/zepelin-2.jpeg')} className='img-fluid' data-aos="fade-down-left" data-aos-offset="200" data-aos-once="true"></img></div>
      </div>

      <div class="row justify-content-center zepelin-container-3">
        <div class="row-9 d-flex justify-content-center"><img src={require('../images/zepelin-medalje.jpeg')} 
        className='img-fluid image-zepelin' data-aos="fade-down" data-aos-offset="200" data-aos-once="true"></img></div>
        <div class="row d-flex my-auto zepelin-text-3 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-once="true">Na Cro Dance Challenge-u 2023. 
        uz vodstvo trenera, mentora i osnivača Josipa Bišćana, osvojili smo zlatnu medalju za "Najbolju urbanu koreografiju" 
        te pehara za najveću nagradu natjecanja "Najbolji scenski nastup".</div>
      </div>

    </div>
  )
}

export default Zepelin
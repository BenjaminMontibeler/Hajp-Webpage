import React from 'react'
import '../pages_styles/ZepelinPage.css'

function ZepelinPage() {
  return (
    <div>
      <h1 className='title zepelin-title'>Zepelin</h1>
      <div className='main-container'>
        <div className='content-container'>
          <img src={require('../images/zepelin-3.jpeg')} className='image'></img>
          <p className='text-1'>Zepelin je vodeća i najstarija grupa unutar plesnog studija Hajp.
            Grupa se sastoji od 15 članova koji pretežito plešu hip-hop uz elemente vogue-a, popping-a, mtv-a i suvremenog.</p>
        </div>
        <div className='content-container'>
          <p className='text-2'>Iako osnovana prije svega 4 godine, plesna grupa nastupala je na brojnim eventima u Slavoniji
            kao što su Ferivi maraton, Hang-Loose 60s party, plesni kamp u Orahovici te mnogim drugim.</p>
          <img src={require('../images/zepelin-2.jpeg')} className='image image-right'></img>
        </div>
        <div className='content-container-2'>
          <img src={require('../images/zepelin-medalje.jpeg')} className='image image-center'></img>
          <p className='text-3'> Na Cro Dance Challenge-u 2023. uz vodstvo trenera, mentora i osnivača Josipa Bišćana, 
          osvojili smo zlatnu medalju za "Najbolju urbanu koreografiju" te pehara za najveću 
          nagradu natjecanja "Najbolji scenski nastup".</p>
        </div>
      </div>
    </div>
  )
}

export default ZepelinPage

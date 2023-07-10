import React, {useEffect} from 'react'
import '../pages_styles/Treneri.css'
import AOS from 'aos';

function Treneri() {

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 2000
      });
    }, 1000); // Delay of 1000 milliseconds (adjust as needed)

    return () => clearTimeout(initAOS);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on reload or refresh
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='trainers-container container-fluid'>
      <div className='row coach-info first' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
        <div className='col-4'>
          <img src={require('../images/Josip.JPG')} className='img-fluid' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"></img>
        </div>
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-left" data-aos-offset="200" data-aos-once="true"> 
        Moje ime je Josip Bišćan, imam 21 godinu i dolazim iz Požege. Sredinom osnovne škole sam se
        krenuo baviti plesom. Samouk sam u urbanim plesnim stilovima, dok sam se jazz dance-om,
        suvremenim i modernim plesom krenuo baviti tek u srednjoj školi. Pohađao sam
        Poljoprivredno-prehrambenu školu u Požegi i završio smjer agroturističkog tehničara. Uz
        pohađanje srednje škole sam krenuo podučavati svoje koreografije i voditi treninge u Plesnom
        Studiju Marine Mihelčić. Treninge sam vodio uz asistenciju Nataše Ledić. Uz vođenje treninga i
        podučavanje koreografija, vodio sam plesne seminare po Slavoniji, sudjelovao sam u brojnim
        završnim produkcijama Plesnog Studija Marine Mihelčić i nastupima po gradu Požegi. Pohađao
        sam mnogobrojne plesne radionice i natjecao se na regionalnim, državnim i svjetskim
        natjecanjima, na kojima sam se u krajnosti i dobro plasirao.
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        Karla Mitrović rođena je u Republici Hrvatskoj u Osijeku 15. travnja 2000. godine. Njen plesni put
        počinje u osnovnoj školi kada se uključuje u plesnu grupu u sklopu izvannastavne aktivnosti. U
        2012. pridružila se Plesnom studiju Shine, gdje se s vremenom susrela s raznim vrstama plesa poput
        kao što su: jazz dance, lyrical, hip hop, MTV, balet itd. Tijekom srednjoškolskog obrazovanja pridružila se
        dramsko-plesnu skupinu Koreos pod vodstvom profesora Igora Grubišića koji vodi koreodrame u kojima je
        sudjelovala kao plesačica, glumica, ali dijelom i kao koreografkinja. U Koreosu je postigla
        s velikim uspjehom nastupajući na raznim kazališnim festivalima i predstavama diljem Hrvatske. Od 2017
        je asistentica u Plesnom studiju Shine i uz pohađanje treninga,
        počinje pomagati trenerima u njihovom vođenju te koreografirati i organizirati razne plesove
        nastupa diljem županije.
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
          Benjamin Montibeler rođen je u Vinkovcima 26. lipnja 1999. Od osnovnoškolskih dana bavi se glumom i plesom te nastupa na raznim
          natjecanjima kao što je LiDraNo. 2021. počinje se baviti hip-hop-om u plesnom studiju Shine i ubrzvo dobiva posao plesnog
          asistenta. S urbanom grupom Zepelin nastupao je na brojnim natjecanjima, kako u skolu plesnog studija Shine, tako i u sklopu plesnog
          studija Hajp.
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        Dino se bavi plesom od 2019. godine. Trenira u plesnom studiju Shine, a glavna plesna tehnika koju savladava je jazz dance. 
        U Shine-u povremeno radi kao asistent u vođenju treninga i koreografiranju. Također pleše hiphop i balet. 
        U slobodno vrijeme osim plesom bavi se i glumom - glumi u dramskom studiju za srednjoškolce u dječjem kazalištu Branka Mihaljevića. 
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
        Romana je studentica psihologije koja je  svoje plesno iskustvo započela još tijekom osnovnoškolskih dana plešući latino i standardne 
        plesove. Svoju ljubav prema plesu nastavila je i tijekom srednjoškolskih dana baveći se zumbom, a s urbanim stilovima se upoznala 
        tijekom fakultetskih dana. Svoje plesno znanje neprestano nadograđuje pohađajući edukacije i class-ove brojnih iskusnih plesača 
        i koreografa.
        </div>
      </div>

      <div className='row coach-info' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        <div className='col-8 d-flex my-auto justify-content-center' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
        Bavim se plesom od 5. razreda osnovne škole. Počela sam sa suvremenim plesom te nakon par godina pauze, započela sam sa folklorom u 
        Folklornom ansamblu Koprivnica. Naime, prilikom upisa na faks u Osijeku upisala sam se u plesni studio Shine i sada tamo savladavam 
        hip-hop te povremeno radim kao asistent u vođenju treninga.
        </div>
        <div className='col-4'>
        <img src={require('../images/Lana.jpg')} className='img-fluid' data-aos="fade-right" data-aos-offset="200" data-aos-once="true"></img>
        </div>
      </div>
      
    </div>
  )
}

export default Treneri

import React, { useEffect, useState } from 'react';
import '../pages_styles/Programi.css';
import { projectFirestore, projectAuth } from '../config/firebase';
import { collection, getDocs, arrayUnion } from 'firebase/firestore';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

const Programi = () => {
  const [dances, setDances] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(projectFirestore, 'Dances'));
      const dancesData = [];
      querySnapshot.forEach((doc) => {
        dancesData.push({ id: doc.id, ...doc.data() });
      });
      setDances(dancesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 1000
      });
    }, 1000);

    return () => clearTimeout(initAOS);
  }, []);

  // const handleLoginRedirect = () => {
  //   navigate('/Login');
  // };

  // const handleProfileRedirect = () => {
  //   navigate('/Profile');
  // };

  const handleButtonClick = async (danceId) => {

    if (!user) {
      alert('Morate se registrirati kako bi se upisali na određeni ples.');
      return;
    }

    const userRef = projectFirestore.collection('Users').doc(user.uid);
    const danceRef = projectFirestore.doc(`Dances/${danceId}`);

    try {
      // Add the dance reference to the user's dances array
      await userRef.update({
        dances: arrayUnion(danceRef),
      });
      // Update the local state with the updated dances array
      setDances((prevDances) => [...prevDances, danceRef]);
      // Redirect to the desired page
      navigate('/Profile');
    } catch (error) {
      console.log('Error adding dance:', error);
    }
  };

  return (
    <div className='programs-container container-fluid justify-content-evenly'>
      <div className="row">
        {dances.map((dance) => (
          <div className="col-md-6 col-lg-6 col-xl-4" key={dance.id}>
            <section>
              <div className='container py-5'>
                <div className='card' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
                  <img src={dance.Slika} className='card-img-top' alt='Plesni stil' />
                  <div className='card-body'>
                    <div className='text-center'>
                      <h5 className='card-title'>{dance.id}</h5>
                      <p className='mb-4'>{dance.Trener}</p>
                    </div>
                    <div>
                      <h5>Termin</h5>
                      {dance.Termin && Object.entries(dance.Termin).map(([key, value]) => (
                        <div className='d-flex justify-content-between' key={key}>
                          <span>{key}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className='d-flex justify-content-between total font-weight-bold mt-4'>
                      <span>Cijena</span>
                      <span>{dance.Cijena}</span>
                    </div>
                  </div>
                  <button className='mb-0 w-100 rounded' onClick={() => handleButtonClick(dance.id)}>Upiši</button>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programi;

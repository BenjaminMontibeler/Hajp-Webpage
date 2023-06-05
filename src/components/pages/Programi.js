import React, { useEffect, useState } from 'react';
import '../pages_styles/Programi.css';
import { projectFirestore, projectAuth } from '../config/firebase';
import { collection, getDocs, arrayUnion } from 'firebase/firestore';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';


function Programi() {
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

  const createDanceReference = async (userId, danceId) => {
    const userRef = projectFirestore.collection('Users').doc(userId);
    return userRef.update({ dances: arrayUnion(danceId) });
  };

  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  const handleProfileRedirect = () => {
    navigate('/Profile');
  };

  const handleButtonClick = async (danceId) => {
    const user = projectAuth.currentUser;
    if (user) {
      try {
        const userId = user.uid;

        // Create a dance reference for the user
        await createDanceReference(userId, danceId);

        // Redirect to the profile page
        handleProfileRedirect();
      } catch (error) {
        console.error('Error creating dance reference:', error);
      }
    } else {
      // User is not logged in, redirect to the login page
      handleLoginRedirect();
    }
  };
  
  return (
    <div className='programs-container container-fluid justify-content-evenly'>
      <div className="row">
        {dances.map((dance) => (
          <div className="col-md-6 col-lg-6 col-xl-4" key={dance.id}>
            <section>
              <div class='container py-5'>
                <div class='card' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
                  <img src={dance.Slika} class='card-img-top' alt='Plesni stil' />
                  <div class='card-body'>
                    <div class='text-center'>
                      <h5 class='card-title'>{dance.id}</h5>
                      <p class='mb-4'>{dance.Trener}</p>
                    </div>
                    <div>
                      <h5>Termin</h5>
                      {Object.entries(dance.Termin).map(([key, value]) => (
                        <div class='d-flex justify-content-between' key={key}>
                          <span>{key}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                    <div class='d-flex justify-content-between total font-weight-bold mt-4'>
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
}

export default Programi;

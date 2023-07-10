import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectFirestore, projectAuth } from '../config/firebase.js';
import '../pages_styles/Profile.css';
import AOS from 'aos';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [dances, setDances] = useState([]);
  const [removalStatus, setRemovalStatus] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page on reload or refresh
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 2000
      });
    }, 1000);

    return () => clearTimeout(initAOS);
  }, []);

  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  const getUserData = async () => {
    try {
      // const userRef = projectFirestore.collection('Users').doc(user.uid);
      const userSnapshot = await projectFirestore.collection('Users').doc(user.uid).get();
      const userData = userSnapshot.data();
      setName(userData.Name);

      if (userData.dances && userData.dances.length > 0) {
        const danceRefs = userData.dances;
        console.log("danceRefs:", danceRefs); // Log dance references

        const danceDocs = await Promise.all(
          danceRefs.map(async (danceRef) => {
            const snapshot = await danceRef.get();
            return snapshot.exists ? { id: snapshot.id, ...snapshot.data() } : null;
          })
        );

        console.log("danceDocs:", danceDocs); // Log dance documents

        const validDanceDocs = danceDocs.filter((doc) => doc !== null);
        console.log("validDanceDocs:", validDanceDocs); // Log valid dance documents

        const sortedDances = validDanceDocs.map((dance) => {
          const sortedTermin = Object.entries(dance.Termin).sort((a, b) => {
            const daysOrder = ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
            const dayA = a[0]
            const dayB = b[0]
            return daysOrder.indexOf(dayA) - daysOrder.indexOf(dayB);
          });

          return { ...dance, Termin: Object.fromEntries(sortedTermin) };
        });

        setDances(sortedDances);
      } else {
        setDances([]);
      }
    } catch (error) {
      console.log('Error retrieving user data:', error);
    }
  };

  const removeDance = async (danceId) => {
    const userRef = projectFirestore.collection('Users').doc(user.uid);
    const userSnapshot = await projectFirestore.collection('Users').doc(user.uid).get();
    const userData = userSnapshot.data();
    const updatedDances = userData.dances.filter(
      (danceRef) => danceRef.id !== danceId
    );
    await userRef.update({ dances: updatedDances });
    setDances(updatedDances);
    setRemovalStatus(true);
  };

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getUserData();
        setRemovalStatus(false);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [user, removalStatus]);

  // useEffect(() => {
  //   if (user) {
  //     getUserData();
  //     setRemovalStatus(false);
  //   }
  // }, [user, removalStatus]);

  if (!user) {
    return (
      <div className='profile-container not-logged container-fluid d-flex justify-content-center'>
        <div className='row not-logged-container justify-content-center'>
          <h1 className='text-center'>Prijavite se kako bi vidjeli vaš profil.</h1>
          <button onClick={handleLoginRedirect}>Log in</button>
        </div>
      </div>
    );
  }

  return (
    <div className='profile-container container-fluid justify-content-center'>
      <div className='logged-container'>
        {name && <h1 className='text-center' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Bok, {name}</h1>}
        {dances.length > 0 ? (
          <div className='programs-container container-fluid justify-content-evenly'>
            <h2 className='text-center dances-title' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Upisani plesovi:</h2>
            <div className="row justify-content-evenly">
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
                        <button className='mb-0 w-100 rounded' onClick={() => removeDance(dance.id)}>Ispiši se</button>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='no-dances-message'>
            <p className='text-center'>
              Niste upisani ni na jedan plesni stil, upišite se{' '}
              <a href="/Programi">ovdje</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

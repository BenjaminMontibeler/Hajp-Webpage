import React from 'react';
import '../pages_styles/Profile.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Profile() {

    useEffect(() => {
        const initAOS = setTimeout(() => {
            AOS.init({
                duration: 2000
            });
        }, 1000); // Delay of 1000 milliseconds (adjust as needed)

        return () => clearTimeout(initAOS);
    }, []);

    return (
        <div className='profile-container'>
            <div className='row container-fluid justify-content-center justify-content-evenly h-100'>
                <div className='col-3 text-center css-effect h-100 w-50 d-flex flex-column justify-content-center'>
                    <h1 data-aos="fade-left" data-aos-offset="200" data-aos-once="true">LOG IN</h1>
                    <div className='form-wrapper mx-auto w-50'>
                        <input type='Email' placeholder='Korisničko ime/E-mail' className='login-input row input-animation'></input>
                        <input type='password' placeholder='Lozinka' className='login-input row input-animation'></input>
                        <input type="button" value="LOG IN" class="login-button input-animation row" />
                    </div>
                </div>
                <div className='col-3 text-center css-effect h-100 w-50 d-flex flex-column justify-content-center'>
                    <h1 data-aos="fade-right" data-aos-offset="200" data-aos-once="true">REGISTER</h1>
                    <div className='form-wrapper mx-auto w-50'>
                        <input type='Email' placeholder='E-mail' className='reg-input row reg-animation'></input>
                        <input type='text' placeholder='Korisničko ime' className='reg-input row reg-animation'></input>
                        <input type='password' placeholder='Lozinka' className='reg-input row reg-animation'></input>
                        <input type="button" value="REGISTER" class="reg-button reg-animation row" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


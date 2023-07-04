import React, { useEffect, useState } from 'react';
import '../pages_styles/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectAuth, projectFirestore } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    useEffect(() => {
        // Scroll to the top of the page on reload or refresh
        window.scrollTo(0, 0);
      }, []);
    

    useEffect(() => {
        const initAOS = setTimeout(() => {
            AOS.init({
                duration: 2000
            });
        }, 1000); // Delay of 1000 milliseconds (adjust as needed)

        return () => clearTimeout(initAOS);
    }, []);

    const navigate = useNavigate(props);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorReg, setErrorReg] = useState('');
    const [errorLog, setErrorLog] = useState('');

    const Reg = (e) => {
        e.preventDefault();
        // console.log('form submitted');
        // console.log(name, email, password);
        projectAuth.createUserWithEmailAndPassword(email, password).then((cred) =>{
            projectFirestore.collection('Users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(()=>{
                setName('');
                setEmail('');
                setPassword('');
                setErrorReg('');
                // props.history.push('/Profile');
                navigate('/Profile');
            }).catch(err => setErrorReg(err.message));
        }).catch(err => setErrorReg(err.message));
    }

    const Login = (e) => {
        e.preventDefault();
        projectAuth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setErrorLog('');
            navigate('/Profile');
        }).catch(err=>setErrorLog(err.message));
    }

    return (
        <div className='login-container'>
            <div className='row container-fluid justify-content-center justify-content-evenly h-100'>
                <div className='col-3 text-center css-effect h-100 w-50 d-flex flex-column justify-content-center'>
                    <h1 data-aos="fade-left" data-aos-offset="200" data-aos-once="true">LOG IN</h1>
                    <form className='form-wrapper mx-auto w-50' onSubmit={Login}>
                        <input type='Email' placeholder='E-mail' className='login-input row input-animation' required
                        onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                        <input type='password' placeholder='Lozinka' className='login-input row input-animation' required
                        onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                        <button type="submit" class="login-button login-animation row" >LOG IN</button>
                        {errorLog && <div className='error-register'>{errorLog}</div>}
                    </form>
                </div>
                <div className='col-3 text-center css-effect h-100 w-50 d-flex flex-column justify-content-center'>
                    <h1 data-aos="fade-right" data-aos-offset="200" data-aos-once="true">REGISTER</h1>
                    <form className='form-wrapper mx-auto w-50' onSubmit={Reg}>
                        <input type='Email' placeholder='E-mail' className='reg-input row reg-animation' required
                        onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                        <input type='text' placeholder='Korisničko ime' className='reg-input row reg-animation' required
                        onChange={(e)=>setName(e.target.value)} value={name}></input>
                        <input type='password' placeholder='Lozinka' className='reg-input row reg-animation' required
                        onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                        <button type="submit" class="reg-button reg-animation row" >REGISTER</button>
                        {errorReg && <div className='error-register'>{errorReg}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;


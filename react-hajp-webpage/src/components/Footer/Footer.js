import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebookF, FaArrowAltCircleUp } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='information-container'>
                <div>
                    <p>All rights reserved.</p>
                </div>
                <div>
                    <h3>Dvorana</h3>
                    <p>
                        Ivana Gundulića 5, 3. KAT,<br></br>
                        Osijek, 31000<br></br>
                        Hrvatska
                    </p>
                </div>
                <div>
                    <h3>Kontakt</h3>
                    <p>hajp@gmail.com</p>
                    <p>095 666 666</p>
                    <span></span>
                </div>
                <div className='social-media'>
                    <FaInstagram />
                    <FaFacebookF />
                </div>
            </div>


            <FaArrowAltCircleUp className='arrow' />

        </div>
    )
}

export default Footer

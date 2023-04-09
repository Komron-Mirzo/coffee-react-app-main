import './Footer.css';
import Logo from '../NavBar/logo-coffee.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div id="footer-up">
                    <div className="f-up-one">
                        <img src={Logo} />
                        <p className='footer-text'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                        </p>
                        <div className="social-media">
                            <span>
                                <a href="#" >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </span>
                            <span>
                                <a href="#" >
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                            </span>
                            <span>
                                <a href="#" >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </span>
                            <span>
                                <a href="#" >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </span>
                        </div>

                    </div>
                    <div className="f-up-two">
                        <h2 className='footer-title'>
                            Working Hours
                        </h2>
                        <ul className='footer-list'>
                            <li>
                                <span className='footer-brown-text'>Sunday - Thursday</span><br />
                                <span className='footer-white-text'>08:00 am - 09:00pm</span>
                            </li>
                            <li>
                                <span className='footer-brown-text'>Only Friday
                                </span><br />
                                <span className='footer-white-text'>03:00 pm - 09:00pm</span>
                            </li>
                            <li>
                                <span className='footer-brown-text'>Saturday</span><br />
                                <span className='footer-white-text'>Closed</span>
                            </li>
                        </ul>

                    </div>
                    <div className="f-up-three">
                        <h2 className='footer-title'>
                            Contact Us
                        </h2>
                        <ul className='footer-list'>
                            <li>
                                <span className='footer-brown-text'>Location:</span><br />
                                <span className='footer-white-text'>Tashkent, Uzbekistan
                                </span>
                            </li>
                            <li>
                                <span className='footer-brown-text'>Email Address :

                                </span><br />
                                <span className='footer-white-text'>kabduvaliyev@gmail.com</span>
                            </li>
                            <li>
                                <span className='footer-brown-text'>Phone Number :
                                </span><br />
                                <span className='footer-white-text'>+998 (90) 984 09 94</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div id="footer-bottom">

                </div>

            </div>

        </div>
    );

}

export default Footer;
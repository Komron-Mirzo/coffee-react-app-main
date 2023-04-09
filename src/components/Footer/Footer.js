import './Footer.css';
import Logo from '../NavBar/logo-coffee.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                                </a>
                            </span>
                        </div>

                    </div>
                    <div className="f-up-two">

                    </div>
                    <div className="f-up-three">

                    </div>

                </div>
                <div id="footer-bottom">

                </div>

            </div>

        </div>
    );

}

export default Footer;
import { FaDiscord, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: 'white', margin: '2rem'}} />
                        <div>
                            <p>53 F. Gochan St. Mabolo Cebu City</p>
                            <p>Philippines</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{color: 'white', margin: '2rem'}} />
                        <h4><p>+63 931 147 3082</p></h4>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{color: 'white', margin: '2rem'}} />
                        <h4>nivekbusinesses@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am self taught programmer. I enjoy problem solving.</p>
                    <div className="social">
                        <FaFacebook size={20} style={{color: 'white', margin: '1rem'}} />
                        <FaLinkedin size={20} style={{color: 'white', margin: '1rem'}} />
                        <FaDiscord size={20} style={{color: 'white', margin: '1rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
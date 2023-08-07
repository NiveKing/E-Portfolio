import { FaDiscord, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
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
                        <a href='https://www.facebook.com/boyrank23' target='_blank'><FaFacebook size={20} style={{color: 'white', margin: '1rem'}} /></a>
                        <a href='https://www.instagram.com/plssquillme/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D&fbclid=IwAR17nYiYxZebt22ZdNU0W4lcCYEOzQYrW13OHRd3w4JhB2xox0SsLFREKiM' target='_blank'><FaInstagram size={20} style={{color: 'white', margin: '1rem'}} /></a>
                        {/* <FaLinkedin size={20} style={{color: 'white', margin: '1rem'}} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import './Heroimg.css';

import IntroImg from '../assets/forHero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className='intro-img' src={IntroImg} alt="Picture of Me" />
            </div>
            <div className="content">
                <p>Hi, Im Kevin Abaquita</p>
                <h1>Web Developer</h1>
                <div>
                    <Link to='/projects' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
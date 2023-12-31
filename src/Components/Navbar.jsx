import { Link } from "react-router-dom"
import { useState } from "react"

import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [color, setColor] = useState(false)

    const onClick = ()=> {
        setShowNav(!showNav)
    }

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color? 'header header-bg': 'header'}>
            <Link to='/'>
                <h1>Kev<span className="blue">Dev</span></h1>
            </Link>
            <ul className={showNav? 'nav-menu active': 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                {/* <li>
                    <Link to='/about'>About</Link>
                </li> */}
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={onClick}>
                {!showNav ? <FaBars size={20} style={{color: 'white'}} /> :
                <FaTimes size={20} style={{color: 'white'}}/>}
            </div>
        </div>
    )
}

export default Navbar;
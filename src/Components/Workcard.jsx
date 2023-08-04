import './Workcard.css'

import Pro1 from '../assets/proj1.jpg'
import { NavLink } from 'react-router-dom';

const Workcard = (props) => {
    return (
        <div className='work-container'>
            <div className="project-container">
                <div className="project-card">
                    <img src={Pro1} alt="project 1" />
                    <h2 className='project-title'>To Do List</h2>
                    <div className="proj-details">
                        <p>This is my first project, all codes are my own. This the first time i used what i learnt. It is simple but I was very proud of myself when I was able to built it</p>
                        <div className="proj-btns">
                            <NavLink className='btn'>View</NavLink>
                            <NavLink className='btn'>Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workcard;
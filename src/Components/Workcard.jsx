import './Workcard.css'

import { NavLink } from 'react-router-dom';

const Workcard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project img" />
            <h2 className='project-title'>{props.title}</h2>
            <div className="proj-details">
                <p>{props.text}</p>
                <div className="proj-btns">
                            <NavLink to={props.view} className='btn'>Link not ready yet</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Workcard;
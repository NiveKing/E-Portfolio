import Workcard from './Workcard';
import ProjectData from './WorkData';


const Work = (props) => {
    return (
        <div className='work-container'>
            <div className="project-container">
                {ProjectData.map((val, index) => {
                    return(
                        <Workcard 
                        key={index}
                        title={val.title}
                        imgsrc={val.imgsrc}
                        text={val.text}
                        view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;
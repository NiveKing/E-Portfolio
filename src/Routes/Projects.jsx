import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero2 from '../Components/Heroimg2';
import Work from '../Components/Work';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading='Projects' text='Here are some of my works' />
            <Work />
            <Footer />
        </div>
    )
}

export default Projects;
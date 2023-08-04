import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero2 from '../Components/Heroimg2';
import Workcard from '../Components/Workcard';

const Projects = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading='Projects' text='Here are some of my works' />
            <Workcard />
            <Footer />
        </div>
    )
}

export default Projects;
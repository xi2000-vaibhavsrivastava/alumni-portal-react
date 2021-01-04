
import logo from '../../logo.svg';
import Header from '../Header/Header';
import { Col, Container, Image, Row } from 'react-bootstrap';
import AboutUs from './AboutUS';
import Joinus from './Joinus';
import Network from './Network';
import Alumnislider from './AlumniSlider';
import Alumni from './Alumni';
import Events from './Events';
import Top from './Top';
import Subfooter from '../Footer/Subfooter';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="App">
            {/* <Header /> */}
            <Top />
            <AboutUs />
            <Joinus />
            <Network />
            {/* <Alumnislider /> */}
            <Alumni />
            <Events />
            <Subfooter />
            <Footer />
        </div>
    );
}

export default Home;


import logo from '../../logo.svg';
import Header from '../Header/Header';
import AboutUs from './AboutUS';
import Joinus from './Joinus';
import Network from './Network';
import Alumnislider from './AlumniSlider';
import Alumni from './Alumni';
import Events from './Events';
import Top from './Top';
import Subfooter from '../Footer/Subfooter';
import Footer from '../Footer/Footer';
import LatestEvents from './LatestEvents';
import CoreCSr from './CoreCSr';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Top />
            <AboutUs />
            <Alumni />
            <LatestEvents />
            <Network />
            {/* <Alumnislider /> */}
            <Events />
            <CoreCSr />
            <Joinus />
            <Subfooter />
            <Footer />
        </div>
    );
}

export default Home;

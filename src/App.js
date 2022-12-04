// import logo from './logo.svg';
import './App.css';
import BestGame from './Komponen/BestGame';
import Intro from './Komponen/Intro';
import NavigationBar from './Komponen/NavigationBar';
import TrendingGame from './Komponen/TrendingGame';
import Contact from './Komponen/Contact';
import Footer from './Komponen/Footer';
import "./style/landingPage.css"

function App() {
    return ( 
        <div>
            <div className="myBg">
            <NavigationBar title="Treasure Game"/>
            <Intro />
            </div>

            <div className="trending">
            <TrendingGame />
            </div>

            <div className="best">
            <BestGame />
            </div>

            <div className="contact">
            <Contact />
            </div>

            <div className="footer">
            <Footer />
            </div>

        </div>

        
    );
}

export default App;
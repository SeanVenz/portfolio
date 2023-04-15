import './App.css';
import { NavBar } from './components/Navbar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import { Projects } from './components/Projects'; 
import { AboutMe } from "./components/Aboutme";
import {Footer} from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      {/* <AboutMe></AboutMe> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

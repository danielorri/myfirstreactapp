
import { Home } from '../Home/Home';
import { NavBar } from '../NavBar/NavBar';
import { AboutMe } from '../AboutMe/aboutMe';
import './App.css';
import { Work } from '../aboutWork/work';
import { Skills } from '../skills/skills';
import { Contact } from '../Contact/contact';
import { Footer } from '../footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='app-main' dataOffset='150'>
          <Home id='home'/>
          <div className='app-other'>
          <AboutMe />
          </div>
          <Work id='aboutWork'/>
          <Skills id='skills'/>
          <Contact id='contact'/>
        </div>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Resume from './components/Resume';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
          <Route exact path='/' element={<Mainpage />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Connect' element={<Connect />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/About' element={<About />} />
          </Routes>
        
        </Router>
    </div>
  );
}

export default App;

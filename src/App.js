import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import ScrollToTop from "./ScrollToTop";
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
       <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;

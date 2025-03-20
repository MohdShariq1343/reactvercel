
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/"  element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

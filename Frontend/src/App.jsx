import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact';
import Projects from './Components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/projects" element={<Projects />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

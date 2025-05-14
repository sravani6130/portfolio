import { useState } from 'react'
import Navbar from '../pages/nav'
import HomePage from '../pages/home'
import AboutPage from '../pages/about';
import SkillsPage from '../pages/skill';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    // <Navbar />
    // <HomePage />
    // </>
    <Router basename="/portfolio">
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          {/* Add routes for Education, Work, Experience, Contact, etc. */}
        </Routes>
      </div>
    </Router>
  )
}

export default App

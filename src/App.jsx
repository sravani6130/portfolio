import { useState } from 'react'
import Navbar from '../pages/nav'
import HomePage from '../pages/home'
import AboutPage from '../pages/about';
import SkillsPage from '../pages/skill';
import EducationPage from '../pages/education';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router basename="/portfolio">
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

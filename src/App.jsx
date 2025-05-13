import { useState } from 'react'
import Navbar from '../pages/nav'
import HomePage from '../pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HomePage />
    </>
  )
}

export default App

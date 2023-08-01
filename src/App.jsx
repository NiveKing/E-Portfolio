import { useState } from 'react'

import Home from './Routes/Home'
import Projects from './Routes/Projects'
import About from './Routes/About'
import Contact from './Routes/Contact'

import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

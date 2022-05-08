import { useState } from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './Components/Landing'
import StateBlog from './Components/StateBlog'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route exact path="useState" element={<StateBlog darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;

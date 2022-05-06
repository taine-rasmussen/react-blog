import './App.css';
import { Routes, Route } from "react-router-dom";


// Components
import Landing from './Components/Landing'
import StateBlog from './Components/StateBlog'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="usestate" element={<StateBlog />} />
      </Routes>
    </div>
  );
}

export default App;

import "./styles/main.css"

import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

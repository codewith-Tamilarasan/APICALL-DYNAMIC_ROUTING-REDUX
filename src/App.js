import React from "react";
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import Homepage from "./components/Homepage";
import Explore from "./components/Explore";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

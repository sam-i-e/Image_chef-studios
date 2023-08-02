import React from 'react'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/home.page';

function App() {
  return (
    <Router>
       <Routes>
        <Route  path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Page1/>}/>
          <Route path='page-2' element={<Page2/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;

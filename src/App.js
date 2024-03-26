import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css';

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1024
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1024
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Page1 windowDimensions={windowDimensions} />} />
            <Route path='page-2' element={<Page2 windowDimensions={windowDimensions} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

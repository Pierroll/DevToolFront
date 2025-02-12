import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import ExploreTools from './pages/ExploreTools';
import SuggestTool from './pages/SuggestTool';
import FavoriteTools from './pages/FavoriteTools';
import { ToolProvider } from './context/ToolContext';
import './App.css';

function App() {
  return (
    <ToolProvider>
      <Router>
        <div className="app-background">
          <div className="gradient-circle gradient-left"></div>
          <div className="gradient-circle gradient-right"></div>

          <div className="content"> {/* ✅ Contenedor principal */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<ExploreTools />} />
              <Route path="/suggest" element={<SuggestTool />} />
              <Route path="/favorites" element={<FavoriteTools />} />
            </Routes>
            <Footer /> {/* ✅ Footer al final */}
          </div>
        </div>
      </Router>
    </ToolProvider>
  );
}

export default App;

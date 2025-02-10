import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import ExploreTools from './pages/ExploreTools';
import SuggestTool from './pages/SuggestTool';
import FavoriteTools from './pages/FavoriteTools';
import { ToolProvider } from './context/ToolContext';

function App() {
  return (
    <ToolProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreTools />} />
        <Route path="/suggest" element={<SuggestTool />} />
        <Route path="/favorites" element={<FavoriteTools />} />
      </Routes>
      <Footer />
    </Router>
    </ToolProvider>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/explore');  // Redirige a la página de ExploreTools
    };

    return (
        <div className="hero">
            <h1>Bienvenido a <span className="highlight">DevToolboX 🚀</span></h1>
            <p>Descubre y comparte las mejores herramientas para desarrolladores.</p>
            <button onClick={handleExploreClick} className="explore-btn">Explorar Herramientas</button>
        </div>
    );
};

export default Hero;

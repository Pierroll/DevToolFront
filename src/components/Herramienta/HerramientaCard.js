import React from 'react';

const HerramientaCard = ({ herramienta }) => {
    return (
        <div className="card">
            <img src={herramienta.imagen} alt={herramienta.nombre} style={{ width: '100px', height: '100px' }} />
            <h3>{herramienta.nombre}</h3>
            <p>{herramienta.descripcion}</p>
            <a href={herramienta.link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
    );
};

export default HerramientaCard;

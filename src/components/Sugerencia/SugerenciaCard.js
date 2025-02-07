import React from 'react';

const SugerenciaCard = ({ sugerencia }) => {
    return (
        <div className="card">
            <h3>{sugerencia.nombre}</h3>
            <p>{sugerencia.comentario}</p>
            <a href={sugerencia.link} target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
    );
};

export default SugerenciaCard;

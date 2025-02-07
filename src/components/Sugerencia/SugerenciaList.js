import React, { useState, useEffect } from 'react';
import { getSugerencias } from '../../services/api';
import SugerenciaCard from './SugerenciaCard';

const SugerenciaList = () => {
    const [sugerencias, setSugerencias] = useState([]);

    useEffect(() => {
        const fetchSugerencias = async () => {
            try {
                const data = await getSugerencias();
                setSugerencias(data);
            } catch (error) {
                console.error('Error al obtener las sugerencias:', error);
            }
        };

        fetchSugerencias();
    }, []);

    return (
        <div>
            <h2>Sugerencias</h2>
            <div className="sugerencia-list">
                {sugerencias.map(sugerencia => (
                    <SugerenciaCard key={sugerencia.id_sugerencia} sugerencia={sugerencia} />
                ))}
            </div>
        </div>
    );
};

export default SugerenciaList;

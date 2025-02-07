import React, { useState, useEffect } from 'react';
import { getHerramientas } from '../../services/api';
import HerramientaCard from './HerramientaCard';

const HerramientaList = () => {
    const [herramientas, setHerramientas] = useState([]);

    useEffect(() => {
        const fetchHerramientas = async () => {
            try {
                const data = await getHerramientas();
                setHerramientas(data);
            } catch (error) {
                console.error('Error al obtener las herramientas:', error);
            }
        };

        fetchHerramientas();
    }, []);

    return (
        <div>
            <h2>Herramientas</h2>
            <div className="herramienta-list">
                {herramientas.map(herramienta => (
                    <HerramientaCard key={herramienta.id_herramienta} herramienta={herramienta} />
                ))}
            </div>
        </div>
    );
};

export default HerramientaList;

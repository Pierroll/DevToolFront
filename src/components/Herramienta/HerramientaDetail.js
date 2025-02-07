import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Usamos react-router-dom para manejar las rutas dinámicas
import { getHerramientaById } from '../../services/api';  // Suponiendo que crees esta función para obtener una herramienta por ID

const HerramientaDetail = () => {
    const { id } = useParams();  // Obtener el ID de la herramienta desde la URL
    const [herramienta, setHerramienta] = useState(null);

    useEffect(() => {
        const fetchHerramienta = async () => {
            try {
                const data = await getHerramientaById(id);  // Llamada a la API para obtener los detalles de la herramienta
                setHerramienta(data);
            } catch (error) {
                console.error('Error al obtener herramienta:', error);
            }
        };

        fetchHerramienta();
    }, [id]);  // La llamada a la API se hace cada vez que el ID cambia

    if (!herramienta) return <p>Cargando...</p>;

    return (
        <div>
            <h2>{herramienta.nombre}</h2>
            <img src={herramienta.imagen} alt={herramienta.nombre} style={{ width: '200px', height: '200px' }} />
            <p>{herramienta.descripcion}</p>
            <p>Calificación: {herramienta.calificacion}</p>
            <p>Categoría: {herramienta.categoria}</p>
            <p>Fecha de publicación: {herramienta.fecha_de_publicacion}</p>
            <a href={herramienta.link} target="_blank" rel="noopener noreferrer">Visitar sitio</a>
        </div>
    );
};

export default HerramientaDetail;

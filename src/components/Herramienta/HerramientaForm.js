import React, { useState } from 'react';
import { createHerramienta } from '../../services/api';

const HerramientaForm = () => {
    const [nombre, setNombre] = useState('');
    const [link, setLink] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevaHerramienta = { nombre, link, descripcion, categoria, calificacion, imagen };

        try {
            await createHerramienta(nuevaHerramienta);
            alert('Herramienta creada exitosamente');
        } catch (error) {
            console.error('Error al crear herramienta:', error);
            alert('Hubo un problema al crear la herramienta');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la herramienta"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Link de la herramienta"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <input
                type="number"
                placeholder="Calificación"
                value={calificacion}
                onChange={(e) => setCalificacion(e.target.value)}
            />
            <input
                type="url"
                placeholder="Imagen de la herramienta"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
            />
            <button type="submit">Agregar herramienta</button>
        </form>
    );
};

export default HerramientaForm;

import React, { useState } from 'react';
import { createSugerencia } from '../../services/api';

const SugerenciaForm = () => {
    const [nombre, setNombre] = useState('');
    const [link, setLink] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevaSugerencia = { nombre, link, comentario };

        try {
            await createSugerencia(nuevaSugerencia);
            alert('Sugerencia creada exitosamente');
        } catch (error) {
            console.error('Error al crear sugerencia:', error);
            alert('Hubo un problema al crear la sugerencia');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de la sugerencia"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Link de la sugerencia"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <textarea
                placeholder="Comentario"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
            />
            <button type="submit">Enviar sugerencia</button>
        </form>
    );
};

export default SugerenciaForm;

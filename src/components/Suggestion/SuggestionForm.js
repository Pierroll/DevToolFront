import React, { useState } from 'react';
import { createSuggestion } from '../../services/api';

const SuggestionForm = ({ onNewSuggestion }) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [comment, setComment] = useState("");

    const isValidURL = (url) => {
        const pattern = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,6}(\/\S*)?$/i;
        return pattern.test(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert("El nombre de la herramienta es obligatorio.");
            return;
        }

        if (link && !isValidURL(link)) {
            alert("Por favor, introduce un enlace válido.");
            return;
        }

        const newSuggestion = { name, link, comment };
        const createdSuggestion = await createSuggestion(newSuggestion);

        if (createdSuggestion && typeof onNewSuggestion === 'function') {
            onNewSuggestion(createdSuggestion);
        }

        setName("");
        setLink("");
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit} className="suggestion-form">
            <h2>Sugerir una nueva herramienta</h2>

            <label>
                Nombre de la herramienta:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Visual Studio Code"
                    required
                />
            </label>

            <label>
                Link de acceso (opcional):
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://ejemplo.com"
                />
            </label>

            <label>
                Comentarios (opcional):
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos más sobre esta herramienta..."
                    rows="4"
                ></textarea>
            </label>

            <button type="submit">Enviar Sugerencia</button>
        </form>
    );
};

export default SuggestionForm;

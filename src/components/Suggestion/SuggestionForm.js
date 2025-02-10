import React, { useState } from 'react';
import { createSuggestion } from '../../services/api';

const SuggestionForm = ({ onNewSuggestion }) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [comment, setComment] = useState("");

    // ✅ Validación personalizada para URL
    const isValidURL = (url) => {
        const pattern = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,6}(\.[a-z]{2,6})?(\/\S*)?$/i;
        return pattern.test(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert("El nombre de la herramienta es obligatorio.");
            return;
        }

        if (link && !isValidURL(link)) {
            alert("Por favor, introduce un enlace válido (ej: www.pierol.com o https://pierol.com).");
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
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md bg-white">
            <h2 className="text-xl font-bold mb-4">Sugerir una nueva herramienta</h2>

            <label className="block mb-2">
                Nombre de la herramienta:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Visual Studio Code"
                    className="w-full p-2 border rounded"
                    required
                />
            </label>

            <label className="block mb-2">
                Link de acceso (opcional):
                <input
                    type="text" // ✅ Cambiado de 'url' a 'text'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://ejemplo.com o www.ejemplo.com"
                    className="w-full p-2 border rounded"
                />
            </label>

            <label className="block mb-4">
                Comentarios (opcional):
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Cuéntanos más sobre esta herramienta..."
                    className="w-full p-2 border rounded"
                    rows="4"
                ></textarea>
            </label>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Enviar sugerencia
            </button>
        </form>
    );
};

export default SuggestionForm;

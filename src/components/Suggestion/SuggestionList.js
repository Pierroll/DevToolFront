import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../../services/api';

// ✅ Función para generar un ID de usuario aleatorio
const generateRandomUserId = () => `USER-${Math.floor(1000 + Math.random() * 9000)}`;

const SuggestionList = ({ newSuggestion }) => {
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async () => {
        const data = await getSuggestions();
        if (Array.isArray(data)) {
            const suggestionsWithUser = data
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // ✅ Ordenar por fecha más reciente
                .slice(0, 10) // ✅ Mostrar solo las 10 más recientes
                .map((suggestion) => ({
                    ...suggestion,
                    userId: generateRandomUserId(),
                }));
            setSuggestions(suggestionsWithUser);
        }
    };

    // ✅ Actualizar la lista cuando se agrega una nueva sugerencia
    useEffect(() => {
        fetchSuggestions();
    }, [newSuggestion]);

    return (
        <div className="p-4 bg-gray-100 shadow rounded">
            <h2 className="text-xl font-bold mb-3">📝 Últimas Sugerencias</h2>
            {suggestions.length === 0 ? (
                <p className="text-gray-500">No hay sugerencias aún.</p>
            ) : (
                <ul className="space-y-2">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id_suggestion} className="p-2 bg-white border rounded shadow-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{suggestion.name}</h3>
                                <span className="text-sm text-gray-500">{suggestion.userId}</span>
                            </div>

                            {suggestion.link && (
                                <a
                                    href={suggestion.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500"
                                >
                                    🌐 Visitar
                                </a>
                            )}
                            <p className="text-sm text-gray-600">{suggestion.comment}</p>
                            <small className="text-gray-400">
                                📅 {new Date(suggestion.date).toLocaleDateString()}
                            </small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SuggestionList;

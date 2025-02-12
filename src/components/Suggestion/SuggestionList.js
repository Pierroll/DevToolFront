import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../../services/api';
import './SuggestionList.css'; // ✅ Asegúrate de importar los estilos CSS

const generateRandomUserId = () => `USER-${Math.floor(1000 + Math.random() * 9000)}`;

const SuggestionList = ({ newSuggestion }) => {
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async () => {
        const data = await getSuggestions();
        if (Array.isArray(data)) {
            const sortedSuggestions = data
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // ✅ Ordenar por fecha reciente
                .slice(0, 5) // ✅ Mostrar solo las 10 más recientes
                .map((suggestion) => ({
                    ...suggestion,
                    userId: generateRandomUserId(),
                }));
            setSuggestions(sortedSuggestions);
        }
    };

    useEffect(() => {
        fetchSuggestions();
    }, [newSuggestion]);

    return (
        <div className="suggestion-list">
            <h2>📋 Últimas Sugerencias</h2>
            {suggestions.length === 0 ? (
                <p className="no-suggestions">No hay sugerencias aún.</p>
            ) : (
                <ul className="suggestion-cards">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id_suggestion} className="suggestion-card">
                            <div className="suggestion-header">
                                <h3>{suggestion.name}</h3>
                                <span>{suggestion.userId}</span>
                            </div>

                            {suggestion.link && (
                                <a href={suggestion.link} target="_blank" rel="noopener noreferrer" className="visit-link">
                                    🌐 Visitar
                                </a>
                            )}
                            {suggestion.comment && (
                                <p className="comment">{suggestion.comment}</p>
                            )}
                            <small className="date">📅 {new Date(suggestion.date).toLocaleDateString()}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SuggestionList;

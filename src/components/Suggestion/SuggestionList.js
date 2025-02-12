import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../../services/api';
import './SuggestionList.css'; 

const generateRandomUserId = () => `USER-${Math.floor(1000 + Math.random() * 9000)}`;

const SuggestionList = ({ newSuggestion }) => {
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async () => {
        const data = await getSuggestions();
        if (Array.isArray(data)) {
            const sortedSuggestions = data
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5)
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
            <h2>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="suggestion-icon">
                    <path d="M80 48h-64C7.156 48 0 55.16 0 64v64c0 8.844 7.156 16 16 16h64C88.84 144 96 136.8 96 128V64C96 55.16 88.84 48 80 48zM80 208h-64C7.156 208 0 215.2 0 224v64c0 8.844 7.156 16 16 16h64C88.84 304 96 296.8 96 288V224C96 215.2 88.84 208 80 208zM80 368h-64C7.156 368 0 375.2 0 384v64c0 8.844 7.156 16 16 16h64C88.84 464 96 456.8 96 448v-64C96 375.2 88.84 368 80 368zM192 128h288c17.67 0 32-14.33 32-31.1S497.7 64 480 64H192C174.3 64 160 78.33 160 95.1S174.3 128 192 128zM480 384H192c-17.67 0-32 14.33-32 32s14.33 32 32 32h288c17.67 0 32-14.33 32-32S497.7 384 480 384zM480 224H192C174.3 224 160 238.3 160 256s14.33 32 32 32h288c17.67 0 32-14.33 32-32S497.7 224 480 224z"/>
                </svg>
                Últimas Sugerencias
            </h2>

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

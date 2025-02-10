import React, { createContext, useState, useContext } from 'react';

const ToolContext = createContext();

export const useToolContext = () => useContext(ToolContext);

export const ToolProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState({}); // { toolId: likeCount }

    const toggleFavorite = (toolId) => {
        setFavorites((prev) =>
            prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
        );
    };

    const toggleLike = (toolId) => {
        setLikes((prev) => ({
            ...prev,
            [toolId]: prev[toolId] ? prev[toolId] - 1 : (prev[toolId] || 0) + 1
        }));
    };

    return (
        <ToolContext.Provider value={{ favorites, likes, toggleFavorite, toggleLike }}>
            {children}
        </ToolContext.Provider>
    );
};

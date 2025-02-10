import React, { useEffect, useState, useCallback } from 'react';
import { getFavoritesByUser } from '../services/api';
import ToolCard from '../components/Tool/ToolCard';

const FavoriteTools = () => {
    const userId = localStorage.getItem('userId');
    const [favorites, setFavorites] = useState([]);

    const fetchFavorites = useCallback(async () => {
        const data = await getFavoritesByUser(userId);
        setFavorites(data);
    }, [userId]);

    useEffect(() => {
        fetchFavorites();

        const handleFavoriteUpdate = (event) => {
            const { toolId, action } = event.detail;

            if (action === 'removed') {
                setFavorites((prevFavorites) =>
                    prevFavorites.filter(fav => fav.id_tool !== toolId)
                );
            } else if (action === 'added') {
                fetchFavorites();
            }
        };

        window.addEventListener('favoriteUpdated', handleFavoriteUpdate);

        return () => {
            window.removeEventListener('favoriteUpdated', handleFavoriteUpdate);
        };
    }, [fetchFavorites]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">⭐ Tus Herramientas Favoritas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.length > 0 ? (
                    favorites.map((tool) => (
                        <ToolCard key={tool.id_tool} tool={tool} />
                    ))
                ) : (
                    <p>No tienes herramientas favoritas todavía.</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteTools;

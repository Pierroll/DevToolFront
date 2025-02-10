import React, { useState, useEffect } from 'react';
import { toggleFavorite, getFavoritesByUser } from '../../services/api';

const FavoriteButton = ({ toolId }) => {
    const userId = localStorage.getItem('userId') || generateUserId();
    const [isFavorite, setIsFavorite] = useState(false);

    function generateUserId() {
        const newUserId = `USER-${Math.floor(1000 + Math.random() * 9000)}`;
        localStorage.setItem('userId', newUserId);
        return newUserId;
    }

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favorites = await getFavoritesByUser(userId);
                setIsFavorite(favorites.some(fav => fav.id_tool === toolId));
            } catch (error) {
                console.error('Error al obtener favoritos:', error);
            }
        };
        fetchFavorites();
    }, [toolId, userId]);

    const handleToggleFavorite = async () => {
        const response = await toggleFavorite(userId, toolId);
        if (response) {
            const newFavoriteState = !isFavorite;
            setIsFavorite(newFavoriteState);

            // 🚀 Disparar un evento personalizado para notificar cambios
            window.dispatchEvent(new CustomEvent('favoriteUpdated', {
                detail: {
                    toolId,
                    action: newFavoriteState ? 'added' : 'removed'
                }
            }));
        }
    };

    return (
        <button
            onClick={handleToggleFavorite}
            className={`px-2 py-1 rounded ${isFavorite ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-black'}`}
        >
            ⭐ {isFavorite ? 'Favorito' : 'Añadir'}
        </button>
    );
};

export default FavoriteButton;

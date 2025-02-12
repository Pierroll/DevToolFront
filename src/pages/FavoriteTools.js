import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavoritesByUser } from '../services/api';
import ToolCard from '../components/Tool/ToolCard';
import './FavoriteTools.css'; // ✅ Asegúrate de importar los estilos CSS

const FavoriteTools = () => {
    const userId = localStorage.getItem('userId');
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

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
        <div className="favorite-tools">
            <h1>Tus Herramientas Favoritas</h1>

            {favorites.length > 0 ? (
                <div className="tool-grid">
                    {favorites.map((tool) => (
                        <ToolCard key={tool.id_tool} tool={tool} />
                    ))}
                </div>
            ) : (
                <div className="no-favorites">
<svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 896 1024"
    width="80"  /* 🔹 Reducción del tamaño */
    height="80"
    fill="none"
    stroke="#facc15"  /* 🔹 Mantiene el color amarillo */
    strokeWidth="20"   /* 🔹 Hace las líneas más delgadas */
    onClick={() => navigate('/explore')}
    className="add-favorite-icon"
>
    <path d="M512 320H384v128H256v128h128v128h128V576h128V448H512V320zM832 64H64C0 64 0 128 0 128v768c0 0 0 64 64 64 0 0 704 0 768 0s64-64 64-64V128C896 128 896 64 832 64zM768 800c0 32-32 32-32 32H160c0 0-32 0-32-32V224c0-32 32-32 32-32h576c0 0 32 0 32 32C768 224 768 773.25 768 800z"/>
</svg>
                    <p>Añade herramientas a favoritos</p>
                </div>
            )}
        </div>
    );
};

export default FavoriteTools;

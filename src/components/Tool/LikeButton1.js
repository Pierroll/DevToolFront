import React, { useState, useEffect } from 'react';
import { toggleLike } from '../../services/api';

const LikeButton = ({ toolId }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const userId = localStorage.getItem('userId') || generateUserId();

    function generateUserId() {
        const newUserId = `USER-${Math.floor(1000 + Math.random() * 9000)}`;
        localStorage.setItem('userId', newUserId);
        return newUserId;
    }

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/likes/${toolId}?userId=${userId}`);
                const data = await response.json();
                setLikeCount(data.likes);
                setLiked(data.likedByUser);
            } catch (error) {
                console.error('Error al obtener los likes:', error);
            }
        };

        fetchLikes();

        // 🔄 Escuchar eventos para actualizar automáticamente
        const handleLikeUpdate = () => fetchLikes();
        window.addEventListener('likeUpdated', handleLikeUpdate);

        return () => window.removeEventListener('likeUpdated', handleLikeUpdate);
    }, [toolId, userId]);

    const handleLike = async () => {
        const response = await toggleLike(userId, toolId);
        if (response) {
            setLiked(!liked);
            setLikeCount((prev) => liked ? prev - 1 : prev + 1);

            // 🚀 Emitir evento personalizado
            window.dispatchEvent(new CustomEvent('likeUpdated'));
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`px-3 py-1 rounded ${liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
        >
            ❤️ {likeCount}
        </button>
    );
};

export default LikeButton;

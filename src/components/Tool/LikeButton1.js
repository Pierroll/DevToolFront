import React, { useState, useEffect } from 'react';
import { toggleLike } from '../../services/api';
import './LikeButton.css'; // ✅ Importamos los estilos

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
        window.addEventListener('likeUpdated', fetchLikes);

        return () => window.removeEventListener('likeUpdated', fetchLikes);
    }, [toolId, userId]);

    const handleLike = async () => {
        const response = await toggleLike(userId, toolId);
        if (response) {
            setLiked(!liked);
            setLikeCount((prev) => liked ? prev - 1 : prev + 1);
            window.dispatchEvent(new CustomEvent('likeUpdated'));
        }
    };

    return (
        <button
            onClick={handleLike}
            className={`like-button ${liked ? 'liked' : ''}`}
            aria-label="Like Button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="heart-icon"
            >
                <path d="M16,30c-0.215,0-0.43-0.069-0.61-0.207C14.844,29.372,2,19.396,2,11c0-4.411,3.589-8,8-8s8,3.589,8,8c0,0.552-0.447,1-1,1
                c-0.552,0-1-0.448-1-1c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,6.467,9.477,14.653,12,16.719C18.522,25.653,28,17.46,28,11
                c0-3.309-2.691-6-6-6c-0.895,0-1.756,0.192-2.559,0.57c-0.5,0.236-1.097,0.021-1.331-0.478c-0.235-0.5-0.021-1.095,0.478-1.331
                C19.66,3.256,20.808,3,22,3c4.411,0,8,3.589,8,8c0,8.396-12.844,18.372-13.39,18.793C16.43,29.931,16.215,30,16,30z" />
            </svg>
            <span>{likeCount}</span>
        </button>
    );
};

export default LikeButton;

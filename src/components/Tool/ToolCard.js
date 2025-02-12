import React, { useState } from "react";
import LikeButton from './LikeButton1';
import FavoriteButton from './FavoriteButton';
import ToolDetail from './ToolDetail';
import './ToolCard.css';

const ToolCard = ({ tool }) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleOpenDetail = () => setIsDetailOpen(true);
    const handleCloseDetail = () => setIsDetailOpen(false);

    return (
        <div className="tool-card">
            {/* ✅ Botón de favoritos en la esquina superior derecha */}
            <FavoriteButton toolId={tool.id_tool} className="add-button" />

            <div className="tool-card-content">
                <img src={tool.image} alt={tool.name} />

                <h3>
                    {tool.name}
                    <a href={tool.link} target="_blank" rel="noopener noreferrer">🔗</a>
                </h3>

                <p>{tool.description}</p>
            </div>

            {/* ✅ Botones de acción con espacio entre ellos */}
            <div className="tool-card-actions">
                <button onClick={handleOpenDetail}>Ver Más</button>
                <LikeButton toolId={tool.id_tool} />
            </div>

            {isDetailOpen && <ToolDetail tool={tool} onClose={handleCloseDetail} />}
        </div>
    );
};

export default ToolCard;

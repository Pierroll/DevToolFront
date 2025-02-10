import React from "react";
import LikeButton from './LikeButton1';
import FavoriteButton from './FavoriteButton';

const ToolCard = ({ tool }) => {
    return (
        <div className="tool-card border p-4 rounded shadow bg-white flex flex-col justify-between">
            <div>
                <img src={tool.image} alt={tool.name} className="w-12 h-12 mb-2" />
                <h3 className="text-lg font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
                <span className="text-sm text-blue-500">{tool.category?.name || "Sin categoría"}</span>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 block">
                    🌐 Visitar
                </a>
            </div>

            <div className="flex justify-between items-center mt-2">
                <LikeButton toolId={tool.id_tool} />
                <FavoriteButton toolId={tool.id_tool} />
            </div>
        </div>
    );
};

export default ToolCard;

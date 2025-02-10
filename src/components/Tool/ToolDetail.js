import React from 'react';

const ToolDetail = ({ tool, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={tool.image} alt={tool.name} className="tool-detail-image" />
                <h2>{tool.name}</h2>
                <p>Category: {tool.category}</p>
                <p>Description: {tool.description}</p>

                <div className="links">
                    <a href={tool.link} target="_blank" rel="noopener noreferrer">🌐 Official Site</a>
                    {tool.tuto1 && <a href={tool.tuto1} target="_blank" rel="noopener noreferrer">📖 Tutorial 1</a>}
                    {tool.tuto2 && <a href={tool.tuto2} target="_blank" rel="noopener noreferrer">📘 Tutorial 2</a>}
                </div>
            </div>
        </div>
    );
};

export default ToolDetail;

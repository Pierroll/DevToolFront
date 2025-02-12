import React from 'react';
import './ExploreTools.css'; // Asegúrate de importar el CSS

const ToolFilter = ({ categories, selectedCategory, onFilter }) => {
    return (
        <div className="tool-filter">
            {categories.map((category) => (
                <button 
                    key={category.id_category}
                    onClick={() => onFilter(category.name)}
                    className={`filter-button ${
                        selectedCategory === category.name ? "active" : ""
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ToolFilter;

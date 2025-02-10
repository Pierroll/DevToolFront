import React from 'react';

const ToolCategories = ({ categories, setSelectedCategory }) => {
    return (
        <div className="tool-categories">
            {categories.map((category) => (
                <button 
                    key={category.id_category} 
                    className="category-button"
                    onClick={() => setSelectedCategory(category.name)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ToolCategories;

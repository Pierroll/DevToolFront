import React from 'react';

const ToolFilter = ({ categories, selectedCategory, onFilter }) => {
    return (
        <div className="flex gap-2 mb-4">
            {categories.map((category) => (
                <button 
                    key={category.id_category}
                    onClick={() => onFilter(category.name)}
                    className={`px-4 py-2 rounded ${
                        selectedCategory === category.name 
                        ? "bg-blue-700 text-white" // ✅ Si está seleccionada, cambia el color
                        : "bg-gray-300"
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default ToolFilter;

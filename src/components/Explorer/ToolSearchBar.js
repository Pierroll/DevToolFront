import React from 'react';

const ToolSearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input 
            type="text"
            placeholder="🔍 Buscar herramientas..."
            className="tool-search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default ToolSearchBar;

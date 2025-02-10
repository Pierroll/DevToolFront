import React from 'react';
import ToolCard from '../Tool/ToolCard';


const ToolList = ({ tools }) => {
    return (
        <div className="tool-list">
            {tools.length > 0 ? (
                tools.map((tool) => <ToolCard key={tool.id_tool} tool={tool} />)
            ) : (
                <p>No se encontraron herramientas.</p>
            )}
        </div>
    );
};

export default ToolList;

import React, { useEffect, useState } from 'react';
import { getPopularTools } from '../../services/api';
import ToolCard from '../Tool/ToolCard';


const PopularTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchPopularTools = async () => {
            const data = await getPopularTools();
            setTools(data);  // Guardamos las herramientas en el estado
        };
        fetchPopularTools();
    }, []);

    return (
        <section>
            <h2>🔥 Herramientas Populares</h2>
            <div className="tool-grid">
                {tools.length > 0 ? (
                    tools.map(tool => <ToolCard key={tool.id_tool} tool={tool} />)
                ) : (
                    <p>No hay herramientas populares disponibles.</p>
                )}
            </div>
        </section>
    );
};

export default PopularTools;

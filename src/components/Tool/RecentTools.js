import React, { useEffect, useState } from 'react';
import { getRecentTools } from '../../services/api';
import ToolCard from '../Tool/ToolCard';


const RecentTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchRecentTools = async () => {
            const data = await getRecentTools();
            setTools(data);
        };
        fetchRecentTools();
    }, []);

    return (
        <section>
            <h2>🆕 Herramientas Recientes</h2>
            <div className="tool-grid">
                {tools.length > 0 ? (
                    tools.map(tool => <ToolCard key={tool.id_tool} tool={tool} />)
                ) : (
                    <p>No hay herramientas recientes disponibles.</p>
                )}
            </div>
        </section>
    );
};

export default RecentTools;

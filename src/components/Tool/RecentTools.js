import React, { useEffect, useState } from 'react';
import { getRecentTools } from '../../services/api';
import ToolCard from '../Tool/ToolCard';
import './RecentTools.css';

const RecentTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchRecentTools = async () => {
            const data = await getRecentTools();
            const sortedTools = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setTools(sortedTools.slice(0, 8));
        };
        fetchRecentTools();
    }, []);

    return (
        <section className="recent-tools">
            <h2>
                <span className="icon-svg">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,19c-3.9,0-7-3.1-7-7s3.1-7,7-7c2,0,3.9,0.9,5.2,2.3l-1.8,0.3c-0.5,0.1-0.9,0.6-0.8,1.2c0.1,0.5,0.5,0.8,1,0.8    
                        c0.1,0,0.1,0,0.2,0l4.2-0.8c0.5-0.1,0.9-0.6,0.8-1.2L20,3.5c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2l0.3,1.7    
                        C16.6,4,14.4,3,12,3C8.7,3,5.8,4.8,4.2,7.5c0,0,0,0,0,0C3.4,8.9,3,10.4,3,12s0.4,3.1,1.2,4.5C5,17.9,6.1,19,7.5,19.8    
                        C8.9,20.6,10.4,21,12,21c0.4,0,0.8-0.3,0.9-0.6C13,20.3,13,20.1,13,20c0-0.1,0-0.3-0.1-0.4C12.8,19.3,12.4,19,12,19z" 
                        fill="#facc15"/>
                        <circle cx="20" cy="12" r="1" fill="#facc15"/>
                        <ellipse cx="18.9" cy="16" rx="1" ry="1" transform="matrix(0.5 -0.866 0.866 0.5 -4.3923 24.3923)" fill="#facc15"/>
                        <ellipse cx="16" cy="18.9" rx="1" ry="1" transform="matrix(0.866 -0.5 0.5 0.866 -7.3205 10.5359)" fill="#facc15"/>
                        <path d="M13,11.6V9c0-0.6-0.4-1-1-1s-1,0.4-1,1v3c0,0.3,0.1,0.5,0.3,0.7l2,2c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4L13,11.6z" 
                        fill="#facc15"/>
                    </svg>
                </span>
                Herramientas Recientes
            </h2>
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

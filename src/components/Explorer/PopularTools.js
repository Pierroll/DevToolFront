import React, { useEffect, useState } from 'react';
import { getPopularTools } from '../../services/api';
import ToolCard from '../Tool/ToolCard';
import './PopularTools.css'; // Asegúrate de importar los estilos

const PopularTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const fetchPopularTools = async () => {
            const data = await getPopularTools();
            const sortedTools = data.sort((a, b) => b.likes - a.likes); // ✅ Ordenar por más likes
            setTools(sortedTools.slice(0, 8)); // ✅ Solo las 8 herramientas más populares
        };
        fetchPopularTools();
    }, []);

    return (
        <section className="popular-tools">
            <h2>
                <span className="icon-svg"> 
                    {/* ✅ Reemplazamos el ícono de fuego por el nuevo SVG */}
                    <svg id="Layer_1_1_" style={{ enableBackground: "new 0 0 16 16" }} version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14,0H2C0.895,0,0,0.895,0,2v10c0,1.105,0.895,2,2,2h3.916L8,16l2-2h4c1.105,0,2-0.895,2-2V2C16,0.895,15.105,0,14,0z 
                        M11.431,7.439l-0.686,0.712L8,11L5.255,8.151L4.569,7.439c-0.758-0.787-0.758-2.062,0-2.849s1.987-0.787,2.745,0L8,5.302 
                        L8.686,4.59c0.758-0.787,1.987-0.787,2.745,0C12.19,5.377,12.19,6.652,11.431,7.439z" 
                        fill="#facc15" />
                    </svg>
                </span>
                Herramientas Populares
            </h2>

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

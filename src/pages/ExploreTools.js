import React, { useEffect, useState } from 'react';
import { getTools, getCategories, searchTools } from '../services/api';
import ToolCard from '../components/Tool/ToolCard';
import ToolFilter from '../components/Explorer/ToolFilter';
import './ExploreTools.css';  // ✅ Asegúrate de importar los estilos

const ExploreTools = () => {
    const [tools, setTools] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadTools();
        loadCategories();
    }, []);

    const loadTools = async (category = "") => {
        const data = await getTools(category);
        setTools(data);
    };

    const loadCategories = async () => {
        const data = await getCategories();
        setCategories(data);
    };

    const handleFilter = async (category) => {
        if (selectedCategory === category) {
            setSelectedCategory("");
            setSearchQuery("");
            loadTools();
        } else {
            setSelectedCategory(category);
            if (searchQuery.trim()) {
                const results = await searchTools(searchQuery, category);
                setTools(results);
            } else {
                loadTools(category);
            }
        }
    };

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === "") {
            loadTools(selectedCategory);
        } else {
            const results = await searchTools(query, selectedCategory);
            setTools(results);
        }
    };

    return (
        <div className="explore-tools">
            <h1>Explorar Herramientas</h1>

            {/* 🔍 Barra de Búsqueda */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar herramientas..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
<span className="search-icon">
    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
        <title/>
        <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"/>
    </svg>
</span>
            </div>

            <ToolFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onFilter={handleFilter}
            />

            <div className="tool-grid">
                {tools.length > 0 ? (
                    tools.map((tool) => <ToolCard key={tool.id_tool} tool={tool} />)
                ) : (
                    <p className="no-tools">No tools found.</p>
                )}
            </div>
        </div>
    );
};

export default ExploreTools;

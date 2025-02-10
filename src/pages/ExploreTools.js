import React, { useEffect, useState } from 'react';
import { getTools, getCategories, searchTools } from '../services/api';
import ToolCard from '../components/Tool/ToolCard';
import ToolFilter from '../components/Explorer/ToolFilter';

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

    // ✅ Manejo del filtro por categoría
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

    // 🔍 Búsqueda en tiempo real
    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === "") {
            loadTools(selectedCategory); // Si la búsqueda está vacía, cargar herramientas normales
        } else {
            const results = await searchTools(query, selectedCategory);
            setTools(results);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Explore Tools</h1>

            {/* 🔍 Barra de Búsqueda */}
            <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <ToolFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onFilter={handleFilter}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.length > 0 ? (
                    tools.map((tool) => <ToolCard key={tool.id_tool} tool={tool} />)
                ) : (
                    <p className="text-center col-span-3">No tools found.</p>
                )}
            </div>
        </div>
    );
};

export default ExploreTools;

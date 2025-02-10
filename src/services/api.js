const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

/**
 * 🔍 Obtener todas las herramientas (opcionalmente filtradas por categoría)
 */
export const getTools = async (category = "") => {
    try {
        const response = await fetch(`${API_URL}/tools${category ? `?category=${category}` : ""}`);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo herramientas:", error);
        return [];
    }
};

/**
 * 🔍 Obtener una herramienta por ID
 */
export const getToolById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tools/${id}`);
        return await response.json();
    } catch (error) {
        console.error(`Error obteniendo herramienta con ID ${id}:`, error);
        return null;
    }
};

/**
 * ➕ Añadir una nueva herramienta
 */
export const createTool = async (toolData) => {
    try {
        const response = await fetch(`${API_URL}/tools`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toolData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error añadiendo herramienta:", error);
        return null;
    }
};

/**
 * 📂 Obtener todas las categorías
 */
export const getCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/categories`);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo categorías:", error);
        return [];
    }
};

/**
 * ❤️ Alternar like para una herramienta
 */
export const toggleLike = async (userId, toolId) => {
    try {
        const response = await fetch(`${API_URL}/likes/toggle`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId, tool_id: toolId })
        });
        return await response.json();
    } catch (error) {
        console.error("Error al gestionar like:", error);
        return null;
    }
};

/**
 * 📅 Obtener las herramientas más recientes
 */
export const getRecentTools = async () => {
    try {
        const response = await fetch(`${API_URL}/tools/recent`);
        if (!response.ok) throw new Error('Error al obtener herramientas recientes');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

/**
 * 🔥 Obtener las herramientas más populares (las 8 con más likes)
 */
export const getPopularTools = async () => {
    try {
        const response = await fetch(`${API_URL}/tools/popular`);
        if (!response.ok) throw new Error('Error al obtener herramientas populares');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

/**
 * 🔍 Buscar herramientas por nombre o descripción (opcionalmente filtradas por categoría)
 */
export const searchTools = async (query, category = "") => {
    try {
        const url = `${API_URL}/tools/search?query=${query}${category ? `&category=${category}` : ""}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error buscando herramientas:", error);
        return [];
    }
};

/**
 * 💡 Obtener sugerencias
 */
export const getSuggestions = async () => {
    try {
        const response = await fetch(`${API_URL}/suggestions`);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo sugerencias:", error);
        return [];
    }
};

/**
 * ➕ Crear una nueva sugerencia
 */
export const createSuggestion = async (suggestionData) => {
    try {
        const response = await fetch(`${API_URL}/suggestions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(suggestionData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error enviando sugerencia:", error);
        return null;
    }
};

/**
 * ⭐ Alternar favorito para una herramienta
 */
export const toggleFavorite = async (userId, toolId) => {
    try {
        const response = await fetch(`${API_URL}/favorites`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId, tool_id: toolId })
        });
        return await response.json();
    } catch (error) {
        console.error("Error al gestionar favorito:", error);
        return null;
    }
};

/**
 * ⭐ Obtener favoritos de un usuario
 */
export const getFavoritesByUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/favorites/${userId}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener favoritos:", error);
        return [];
    }
};

/**
 * 👍 Obtener la cantidad de likes de una herramienta y si el usuario la ha dado like
 */
export const getLikesForTool = async (toolId, userId) => {
    try {
        const response = await fetch(`${API_URL}/likes/${toolId}?userId=${userId}`);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener likes:", error);
        return { likes: 0, likedByUser: false };
    }
};

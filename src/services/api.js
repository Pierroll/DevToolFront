const API_URL = 'http://localhost:5000/api';  // URL de tu API backend

// Obtener todas las herramientas
export const getHerramientas = async () => {
    try {
        const response = await fetch(`${API_URL}/herramientas`);
        if (!response.ok) {
            throw new Error('Error al obtener herramientas');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener herramientas', error);
        throw error;  // Propagar el error
    }
};

// Crear una nueva herramienta
export const createHerramienta = async (herramientaData) => {
    try {
        const response = await fetch(`${API_URL}/herramientas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(herramientaData),
        });
        if (!response.ok) {
            throw new Error('Error al crear herramienta');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al crear herramienta', error);
        throw error;  // Propagar el error
    }
};

// Obtener todas las sugerencias
export const getSugerencias = async () => {
    try {
        const response = await fetch(`${API_URL}/sugerencias`);
        if (!response.ok) {
            throw new Error('Error al obtener sugerencias');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener sugerencias', error);
        throw error;  // Propagar el error
    }
};

// Crear una nueva sugerencia
export const createSugerencia = async (sugerenciaData) => {
    try {
        const response = await fetch(`${API_URL}/sugerencias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sugerenciaData),
        });
        if (!response.ok) {
            throw new Error('Error al crear sugerencia');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al crear sugerencia', error);
        throw error;  // Propagar el error
    }
};
// Obtener una herramienta por su ID
export const getHerramientaById = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/herramientas/${id}`);
        if (!response.ok) {
            throw new Error('Error al obtener la herramienta');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener herramienta por ID:', error);
        throw error;  // Propagar el error
    }
};

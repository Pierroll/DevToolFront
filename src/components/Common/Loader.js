import React from 'react';
import './Loader.css'; // ✅ Importar el CSS del loader

const Loader = () => {
    return (
        <div className="loader-overlay">
            <span className="loader"></span>
        </div>
    );
};

export default Loader;

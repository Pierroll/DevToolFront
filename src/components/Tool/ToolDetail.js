import React from 'react';
import ReactDOM from 'react-dom';
import './ToolDetail.css';

const ToolDetail = ({ tool, onClose }) => {
    if (!tool) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {/* ✅ Botón de cierre con SVG */}
                <button onClick={onClose} className="close-btn">
                    <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <h2>{tool.name}</h2>
                <img src={tool.image} alt={tool.name} className="tool-image" />
                <p>{tool.description}</p>

                {/* ✅ Botón de enlace con icono actualizado */}
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                    <svg className="link-icon" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M598.6 41.41C570.1 13.8 534.8 0 498.6 0s-72.36 13.8-99.96 41.41l-43.36 43.36c15.11 8.012 29.47 17.58 41.91 30.02c3.146 3.146 5.898 6.518 8.742 9.838l37.96-37.96C458.5 72.05 477.1 64 498.6 64c20.67 0 40.1 8.047 54.71 22.66c14.61 14.61 22.66 34.04 22.66 54.71s-8.049 40.1-22.66 54.71l-133.3 133.3C405.5 343.1 386 352 365.4 352s-40.1-8.048-54.71-22.66C296 314.7 287.1 295.3 287.1 274.6s8.047-40.1 22.66-54.71L314.2 216.4C312.1 212.5 309.9 208.5 306.7 205.3C298.1 196.7 286.8 192 274.6 192c-11.93 0-23.1 4.664-31.61 12.97c-30.71 53.96-23.63 123.6 22.39 169.6C293 402.2 329.2 416 365.4 416c36.18 0 72.36-13.8 99.96-41.41L598.6 241.3c28.45-28.45 42.24-66.01 41.37-103.3C639.1 102.1 625.4 68.16 598.6 41.41zM234 387.4L196.1 425.3C181.5 439.1 162 448 141.4 448c-20.67 0-40.1-8.047-54.71-22.66c-14.61-14.61-22.66-34.04-22.66-54.71s8.049-40.1 22.66-54.71l133.3-133.3C234.5 168 253.1 160 274.6 160s40.1 8.048 54.71 22.66c14.62 14.61 22.66 34.04 22.66 54.71s-8.047 40.1-22.66 54.71L325.8 295.6c2.094 3.939 4.219 7.895 7.465 11.15C341.9 315.3 353.3 320 365.4 320c11.93 0 23.1-4.664 31.61-12.97c30.71-53.96 23.63-123.6-22.39-169.6C346.1 109.8 310.8 96 274.6 96C238.4 96 202.3 109.8 174.7 137.4L41.41 270.7c-27.6 27.6-41.41 63.78-41.41 99.96c-.0001 36.18 13.8 72.36 41.41 99.97C69.01 498.2 105.2 512 141.4 512c36.18 0 72.36-13.8 99.96-41.41l43.36-43.36c-15.11-8.012-29.47-17.58-41.91-30.02C239.6 394.1 236.9 390.7 234 387.4z"/>
                    </svg>
                    Visitar Sitio Oficial
                </a>

                {tool.tuto1 || tool.tuto2 ? (
    <div className="tutorials">
<h3>
    <svg className="tutorials-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px">
        <g id="background">
            <rect fill="none" height="32" width="32"/>
        </g>
        <g id="book_x5F_image_x5F_run">
            <g>
                <g>
                    <path d="M32,23.001c0-3.917-2.506-7.24-5.998-8.477V4h-2V1.999h2V0h-23C2.918,0.004,2.294-0.008,1.556,0.354 C0.808,0.686-0.034,1.645,0.001,3c0,0.006,0.001,0.012,0.001,0.018V30c0,2,2,2,2,2h21.081l-0.007-0.004 C28.013,31.955,32,27.946,32,23.001z M2.853,3.981C2.675,3.955,2.418,3.869,2.274,3.743C2.136,3.609,2.017,3.5,2.002,3 c0.033-0.646,0.194-0.686,0.447-0.856c0.13-0.065,0.289-0.107,0.404-0.125C2.97,1.997,3,2.005,3.002,1.999h19V4h-19 C3,4,2.97,4.002,2.853,3.981z M4.002,30V6h20v8.06C23.673,14.023,23.339,14,23,14c-4.972,0-9,4.029-9,9 c0,2.829,1.307,5.35,3.348,6.999H4.002z M23,30c-3.865-0.008-6.994-3.135-7-6.999c0.006-3.865,3.135-6.995,7-7.001 c3.865,0.006,6.992,3.136,7,7.001C29.992,26.865,26.865,29.992,23,30z"/>
                </g>
            </g>
            <polygon points="22,19 22,27 26,23  "/>
        </g>
    </svg>
    Tutoriales Básicos
</h3>


        <ul>
            {tool.tuto1 && (
                <li className="tutorial-btn">
                    <svg className="tutorial-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <line x1="80" y1="128" x2="176" y2="128" stroke="#facc15" strokeWidth="16" />
                        <path d="M104,176H64a48,48,0,0,1,0-96h40" stroke="#facc15" strokeWidth="16" fill="none" />
                        <path d="M152,176h40a48,48,0,0,0,0-96H152" stroke="#facc15" strokeWidth="16" fill="none" />
                    </svg>
                    <a href={tool.tuto1} target="_blank" rel="noreferrer">Tutorial 1</a>
                </li>
            )}
            {tool.tuto2 && (
                <li className="tutorial-btn">
                    <svg className="tutorial-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <line x1="80" y1="128" x2="176" y2="128" stroke="#facc15" strokeWidth="16" />
                        <path d="M104,176H64a48,48,0,0,1,0-96h40" stroke="#facc15" strokeWidth="16" fill="none" />
                        <path d="M152,176h40a48,48,0,0,0,0-96H152" stroke="#facc15" strokeWidth="16" fill="none" />
                    </svg>
                    <a href={tool.tuto2} target="_blank" rel="noreferrer">Tutorial 2</a>
                </li>
            )}
        </ul>
    </div>
) : (
    <p>No hay tutoriales disponibles.</p>
)}

            </div>
        </div>,
        document.body
    );
};

export default ToolDetail;

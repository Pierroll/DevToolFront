import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} DevToolboX. Todos los derechos reservados. 🚀</p>
        </footer>
    );
};

export default Footer;

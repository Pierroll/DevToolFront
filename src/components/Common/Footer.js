import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contacto */}
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: <a href="mailto:soportemorrisbundos@gmail.com">soportemorrisbundos@gmail.com</a></p>
                </div>

                {/* Redes Sociales */}
                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="/" aria-label="Facebook" className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="#facc15">
                                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524-28.03,62.554-62.554,62.554H343.978V319.085h66.6l12.672-82.621h-79.272v-53.617c0-22.603 11.073-44.636 46.58-44.636h36.042v-70.34c0 0-32.71-5.582-63.982-5.582-65.288,0-107.96,39.569-107.96,111.204v62.971h-72.573v82.621h72.573v192.915H62.554c-34.524,0-62.554-28.03-62.554-62.554V62.554C0,28.03,28.029,0,62.554,0h386.892Z" />
                            </svg>
                        </a>

                        <a href="/" aria-label="Twitter" className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#facc15">
                                <path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z" />
                            </svg>
                        </a>

                        <a href="/" aria-label="Instagram" className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="#facc15">
                                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/>
                            </svg>
                        </a>

                        <a href="/" aria-label="LinkedIn" className="icon-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.693 56.693" width="24" height="24" fill="#facc15">
                                <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Legal */}
                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/">Términos y Condiciones</a></li>
                        <li><a href="/">Política de Privacidad</a></li>
                        <li><a href="/">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                © 2025 DevToolboX. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;

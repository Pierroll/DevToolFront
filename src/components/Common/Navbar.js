import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detecta cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logodtb.png" alt="DevToolboX Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            {isMobile ? (
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5495 2.53189C11.3874 1.82531 12.6126 1.82531 13.4505 2.5319L20.2005 8.224C20.7074 8.65152 21 9.2809 21 9.94406V19.7468C21 20.7133 20.2165 21.4968 19.25 21.4968H15.75C14.7835 21.4968 14 20.7133 14 19.7468V14.2468C14 14.1088 13.8881 13.9968 13.75 13.9968H10.25C10.1119 13.9968 9.99999 14.1088 9.99999 14.2468V19.7468C9.99999 20.7133 9.2165 21.4968 8.25 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V9.94406C3 9.2809 3.29255 8.65152 3.79952 8.224L10.5495 2.53189Z"
                  fill="#E1DDDF"
                />
              </svg>
            ) : (
              "Inicio"
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/explore"
            className={`nav-item ${location.pathname === "/explore" ? "active" : ""}`}
          >
            {isMobile ? (
              <svg
                className="feather feather-tool"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            ) : (
              "Descubrir herramientas"
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/suggest"
            className={`nav-item ${location.pathname === "/suggest" ? "active" : ""}`}
          >
            {isMobile ? (
              <svg
                enableBackground="new 0 0 48 48"
                height="24px"
                viewBox="0 0 48 48"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon fill="#E1DDDF" points="35,22 26,22 26,13.002 22,13.002 22,22 13,22 13,26 22,26 22,34.998 26,34.998 26,26 35,26"/>
              </svg>
            ) : (
              "Sugerir herramientas"
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/favorites"
            className={`nav-item ${location.pathname === "/favorites" ? "active" : ""}`}
          >
            {isMobile ? (
              <svg
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" fill="#E1DDDF" />
              </svg>
            ) : (
              "Favoritos"
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

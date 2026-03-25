import { useState } from 'react';
import "../styles/hamburger.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', legal: false },
    { name: 'Servicios', href: '#servicios', legal: false },
    { name: 'Casos de Éxito', href: '#casos-exito', legal: false },
    { name: 'Nosotros', href: '#nosotros', legal: false },
    { name: 'Contacto', href: '#contacto', legal: false },
    { name: 'Curso IA', href: 'curso-ia', legal: false },
    { name: 'Términos', href: 'terminos', legal: true },
    { name: 'Privacidad', href: 'privacidad', legal: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 px-1">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logoActual.png"
              alt="Secuoya"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Hamburger + dropdown */}
          <div className="relative pr-2">
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="hamburger-container">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </div>
            </div>

            {/* DROPDOWN */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in">

                {menuItems.map((item, index) => (
                  <div key={item.name}>
                    
                    {/* Separador legal */}
                    {item.legal && index > 0 && !menuItems[index - 1].legal && (
                      <div className="border-t border-gray-100 my-1" />
                    )}

                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        item.legal
                          ? "text-gray-400 hover:text-blue-500"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}

              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}
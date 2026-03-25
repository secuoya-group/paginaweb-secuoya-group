import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/secuoya-strategy-ia/posts/?feedView=all', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/secuoya.ia/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:gerencia.ti@secu-ia.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logoActual.png`}
              alt="Secuoya"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Transformando el futuro a través de la innovación tecnológica y la excelencia en el servicio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Secuoya Institute. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

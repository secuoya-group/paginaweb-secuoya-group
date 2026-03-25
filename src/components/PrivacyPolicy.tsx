import { Database, Eye, Cpu, Cookie, Share2, ShieldCheck, Clock, UserCheck, Globe, Users, RefreshCw, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      number: '1',
      title: 'Información que Recopilamos',
      content:
        'Recopilamos datos proporcionados por el usuario (nombre, correo, formularios), información automática (IP, navegador, sistema operativo, páginas visitadas, tiempo de navegación) y datos generados por el uso de la IA como consultas realizadas y contenido procesado o analizado.',
    },
    {
      icon: Eye,
      number: '2',
      title: 'Finalidad del Tratamiento',
      content:
        'Utilizamos la información para proporcionar y mejorar nuestros servicios, procesar solicitudes y consultas, personalizar la experiencia del usuario, analizar el uso de la plataforma y garantizar la seguridad del sistema.',
    },
    {
      icon: Cpu,
      number: '3',
      title: 'Uso de Inteligencia Artificial',
      content:
        'La información ingresada puede ser procesada por sistemas de IA para generar respuestas, análisis o automatizaciones. No utilizamos los datos ingresados para entrenar modelos públicos sin consentimiento explícito del usuario.',
    },
    {
      icon: Cookie,
      number: '4',
      title: 'Cookies y Tecnologías Similares',
      content:
        'Utilizamos cookies para mejorar la experiencia del usuario, analizar tráfico y comportamiento, y recordar preferencias. El usuario puede configurar su navegador para rechazar cookies en cualquier momento.',
    },
    {
      icon: Share2,
      number: '5',
      title: 'Compartición de Datos',
      content:
        'No vendemos datos personales. Podemos compartir información con proveedores tecnológicos (hosting, analítica, etc.) y autoridades legales cuando sea requerido por ley. Todos los terceros cumplen estándares de seguridad adecuados.',
    },
    {
      icon: ShieldCheck,
      number: '6',
      title: 'Seguridad de la Información',
      content:
        'Implementamos medidas técnicas y organizativas para proteger los datos contra acceso no autorizado, pérdida, alteración o uso indebido. Sin embargo, ningún sistema es completamente seguro y el usuario utiliza el servicio bajo su propio riesgo.',
    },
    {
      icon: Clock,
      number: '7',
      title: 'Retención de Datos',
      content:
        'Los datos se conservarán solo durante el tiempo necesario para cumplir con las finalidades descritas en esta política o con los requisitos legales aplicables en Colombia.',
    },
    {
      icon: UserCheck,
      number: '8',
      title: 'Derechos del Usuario',
      content:
        'El usuario puede acceder a sus datos, solicitar corrección o eliminación y retirar el consentimiento en cualquier momento. Para ejercer estos derechos, escríbenos a: gerencia.ti@secu-ia.com.',
    },
    {
      icon: Globe,
      number: '9',
      title: 'Enlaces a Terceros',
      content:
        'Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de sus políticas de privacidad ni del tratamiento que hagan de tus datos.',
    },
    {
      icon: Users,
      number: '10',
      title: 'Menores de Edad',
      content:
        'Nuestros servicios no están dirigidos a menores de edad. No recopilamos datos intencionalmente de menores. Si detectamos que se han recopilado datos de un menor, los eliminaremos de inmediato.',
    },
    {
      icon: RefreshCw,
      number: '11',
      title: 'Cambios en esta Política',
      content:
        'Podemos actualizar esta política en cualquier momento. Los cambios serán publicados en esta misma página con la fecha de última actualización. El uso continuado del servicio implica la aceptación de los cambios.',
    },
    {
      icon: Mail,
      number: '12',
      title: 'Contacto',
      content:
        'Si tienes preguntas sobre esta política o el tratamiento de tus datos personales, puedes contactarnos en: gerencia.ti@secu-ia.com. Atenderemos tu solicitud conforme a la normativa colombiana vigente.',
    },
  ];

  return (
    <section id="privacidad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Legal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Última actualización: 18/03/2026 — En SECUOYA STRATEGY & IA respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <section.icon
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    size={26}
                  />
                </div>
                <span className="text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300 select-none leading-none">
                  {section.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Footer notice */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 text-center">
          <ShieldCheck className="text-blue-500 mx-auto mb-3" size={32} />
          <p className="text-gray-700 font-medium text-lg mb-1">
            Al utilizar SECUOYA STRATEGY & IA, aceptas esta Política de Privacidad en su totalidad.
          </p>
          <p className="text-gray-500 text-sm">
            ¿Tienes preguntas sobre el tratamiento de tus datos?{' '}
            <a
              href="mailto:gerencia.ti@secu-ia.com"
              className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2 transition-colors"
            >
              gerencia.ti@secu-ia.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
import { Shield, User, Cpu, Lock, FileText, AlertCircle, Globe, RefreshCw, Scale, Mail } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    {
      icon: User,
      number: '1',
      title: 'Identificación del Titular',
      content:
        'Secuoya Strategy & IA es una plataforma tecnológica enfocada en soluciones basadas en inteligencia artificial, incluyendo análisis, automatización y herramientas relacionadas con seguridad digital. Para contacto: gerencia.ti@secu-ia.com — https://secu-ia.com/',
    },
    {
      icon: Globe,
      number: '2',
      title: 'Objeto del Servicio',
      content:
        'Secuoya Strategy & IA proporciona herramientas de IA destinadas a procesamiento y análisis de información, automatización de tareas y apoyo en seguridad digital y tecnológica. Los servicios pueden actualizarse, modificarse o suspenderse en cualquier momento sin previo aviso.',
    },
    {
      icon: Shield,
      number: '3',
      title: 'Condiciones de Uso',
      content:
        'El usuario se compromete a utilizar la plataforma de forma legal y ética, sin actividades ilícitas, sin vulnerar la seguridad del sistema ni generar contenido ilegal, dañino o engañoso. Nos reservamos el derecho de suspender cuentas que incumplan estas condiciones.',
    },
    {
      icon: Cpu,
      number: '4',
      title: 'Uso de Inteligencia Artificial',
      content:
        'Los resultados generados por IA pueden no ser 100% precisos. Secuoya Strategy & IA no garantiza exactitud absoluta y el uso de la información generada es responsabilidad del usuario. La plataforma no reemplaza asesoría profesional (legal, médica, financiera, etc.).',
    },
    {
      icon: FileText,
      number: '5',
      title: 'Propiedad Intelectual',
      content:
        'Todos los contenidos, software, algoritmos, diseño y marca de Secuoya Strategy & IA son propiedad del titular o están licenciados. Queda prohibido copiar, distribuir, modificar o reutilizar el sistema para fines comerciales sin autorización expresa.',
    },
    {
      icon: Lock,
      number: '6',
      title: 'Datos Personales y Privacidad',
      content:
        'Secuoya Strategy & IA puede recopilar datos de uso, información técnica del dispositivo y datos proporcionados voluntariamente. El tratamiento se realiza conforme a nuestra Política de Privacidad. No vendemos datos personales a terceros.',
    },
    {
      icon: AlertCircle,
      number: '7',
      title: 'Limitación de Responsabilidad',
      content:
        'Secuoya Strategy & IA no será responsable por daños derivados del uso de la plataforma, decisiones tomadas basadas en resultados de IA, ni por fallos técnicos, interrupciones o errores del sistema. El usuario utiliza el servicio bajo su propio riesgo.',
    },
    {
      icon: RefreshCw,
      number: '8',
      title: 'Disponibilidad y Modificaciones',
      content:
        'No garantizamos disponibilidad continua o libre de errores. Podemos modificar, suspender o eliminar funcionalidades en cualquier momento. Secuoya Strategy & IA podrá modificar estos términos en cualquier momento; los cambios entrarán en vigor una vez publicados.',
    },
    {
      icon: Globe,
      number: '9',
      title: 'Enlaces a Terceros',
      content:
        'La plataforma puede contener enlaces a servicios externos. No nos hacemos responsables por el contenido o políticas de terceros vinculados desde nuestra plataforma.',
    },
    {
      icon: Scale,
      number: '10',
      title: 'Legislación Aplicable',
      content:
        'Estos términos se rigen por las leyes aplicables en Colombia. Cualquier controversia derivada del uso de la plataforma se someterá a la jurisdicción competente en dicho territorio.',
    },
    {
      icon: Mail,
      number: '11',
      title: 'Contacto',
      content:
        'Para dudas, solicitudes o ejercicio de derechos relacionados con estos términos, puedes escribirnos a: gerencia.ti@secu-ia.com. Atenderemos tu solicitud en el menor tiempo posible.',
    },
  ];

  return (
    <section id="#erminos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Legal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Términos y Condiciones de Uso
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Última actualización: 18/03/2026 — Al acceder o utilizar nuestros servicios, aceptas cumplir con estos términos.
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
          <Shield className="text-blue-500 mx-auto mb-3" size={32} />
          <p className="text-gray-700 font-medium text-lg mb-1">
            Al utilizar Secuoya Strategy & IA, aceptas estos Términos y Condiciones en su totalidad.
          </p>
          <p className="text-gray-500 text-sm">
            ¿Tienes dudas?{' '}
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
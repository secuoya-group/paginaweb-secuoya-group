import { Map, Gauge, Brain, ShieldCheck, Dumbbell, BadgeCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Map,
      title: 'Diagnóstico de procesos',
      description: 'Mapeamos procesos y detectamos “cuellos de botella” con impacto directo en productividad y tiempos.',
    },
    {
      icon: Gauge,
      title: 'Automatización de punta a punta',
      description: 'Diseñamos automatizaciones en n8n y Power Automate integrando sistemas, datos y aprobaciones.',
    },
    {
      icon: Brain,
      title: 'Agentes de IA y copilotos',
      description: 'Construimos agentes que consultan información, asisten al equipo, generan reportes y ejecutan acciones con control.',
    },
    {
      icon: ShieldCheck,
      title: 'Gobernanza y seguridad',
      description: 'Buenas prácticas: control de accesos, trazabilidad, manejo de credenciales y cumplimiento básico.',
    },
    {
      icon: Dumbbell,
      title: 'Capacitación y adopción',
      description: 'Entrenamos equipos para que la solución se use de verdad: guías, playbooks y sesiones por rol.',
    },
    {
      icon: BadgeCheck,
      title: 'Resultados medibles',
      description: 'Definimos indicadores (tiempo ahorrado, errores, productividad) y dejamos un plan de mejora continua.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Secuoya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un instituto de innovación tecnológica dedicado a impulsar el crecimiento de empresas
            a través de soluciones digitales de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-emerald-100 p-4 rounded-lg flex-shrink-0">
                <value.icon className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Cómo trabajamos</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Nuestro enfoque se basa en un proceso integral que inicia con la fase de descubrimiento, 
            en la que comprendemos a fondo tus procesos, datos y objetivos; continúa con la definición de una estrategia clara,
             donde diseñamos una hoja de ruta tecnológica alineada con tus metas; avanza hacia la implementación de soluciones
              escalables y seguras; y se consolida mediante la optimización continua, monitoreando y mejorando el rendimiento de forma
              permanente. Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones consolidadas,
               acompañándolas en su transformación digital y ayudándolas a alcanzar sus objetivos estratégicos mediante el uso efectivo
              de la tecnología.
          </p>
        </div>
      </div>
    </section>
  );
}

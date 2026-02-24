import {  Database, Cloud, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Consultoría de Transformación Digital',
      description: 'Hoja de ruta, priorización, quick wins y plan de implementación por fases.',
    },
    {
      icon: Database,
      title: 'Automatizaciones (n8n / Power Automate)',
      description: 'Diseño e implementación de flujos, integraciones, alertas, reportes y automatización operativa.',
    },
    {
      icon: Bot,
      title: 'Agentes de IA y Herramientas',
      description: 'Chatbots internos, asistentes por área, RAG con documentos y automatización de tareas cognitivas.',
    },
    {
      icon: Cloud,
      title: 'Proyectos end-to-end',
      description: 'Si necesitas que lo hagamos todo: levantamiento, diseño, desarrollo, despliegue, capacitación y soporte. Ideal para iniciativas con impacto transversal.',
    }
    
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

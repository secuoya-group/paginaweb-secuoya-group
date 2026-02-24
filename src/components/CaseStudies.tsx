import { TrendingUp, Users, Zap } from 'lucide-react';
import { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    icon: React.ElementType;
  }>;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Transformación Digital de Retailer Nacional',
    company: 'TechStore España',
    industry: 'Retail',
    challenge: 'Sistema de inventario obsoleto que generaba pérdidas de 2M anuales y experiencia de cliente deficiente',
    solution: 'Implementación de plataforma e-commerce integrada con sistema de inventario en tiempo real y aplicación móvil',
    results: [
      { metric: 'Aumento de Ventas', value: '+320%', icon: TrendingUp },
      { metric: 'Usuarios Activos', value: '+85K', icon: Users },
      { metric: 'Velocidad Carga', value: '-70%', icon: Zap },
    ],
  },
  {
    id: 2,
    title: 'Automatización de Procesos Empresariales',
    company: 'FinServe Solutions',
    industry: 'Finanzas',
    challenge: 'Procesos manuales que requería 200+ horas mensuales y alto riesgo de errores en trámites',
    solution: 'Sistema de automatización con IA y RPA para procesos financieros y reportería automática',
    results: [
      { metric: 'Horas Ahorradas', value: '85%', icon: Zap },
      { metric: 'Precisión', value: '+99.8%', icon: TrendingUp },
      { metric: 'Equipo Liberado', value: '+12 pers', icon: Users },
    ],
  },
  {
    id: 3,
    title: 'Migración a Cloud y Escalabilidad',
    company: 'DataHub Consulting',
    industry: 'Tecnología',
    challenge: 'Infraestructura on-premise limitada, costos operacionales altos y downtime frecuente',
    solution: 'Migración a AWS con arquitectura microservicios, garantizando 99.99% uptime',
    results: [
      { metric: 'Disponibilidad', value: '99.99%', icon: TrendingUp },
      { metric: 'Costos Reducidos', value: '-45%', icon: Zap },
      { metric: 'Escalabilidad', value: '10x', icon: Users },
    ],
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section id="casos-exito" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos que transformaron negocios y generaron resultados tangibles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button
                onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                className="w-full text-left"
              >
                <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="font-semibold text-blue-600">{caseStudy.company}</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {caseStudy.industry}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`text-blue-600 text-2xl transition-transform duration-300 ${
                          selectedCase === caseStudy.id ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      <span className="font-semibold text-gray-900">Desafío: </span>
                      {caseStudy.challenge}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        selectedCase === caseStudy.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-t border-gray-300 pt-6 space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solución Implementada</h4>
                          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Resultados Logrados</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div
                                key={resultIndex}
                                className="bg-white p-4 rounded-lg border border-blue-200 hover:border-blue-500 transition-colors duration-300"
                              >
                                <result.icon className="text-blue-600 mb-2" size={24} />
                                <p className="text-2xl font-bold text-blue-600 mb-1">
                                  {result.value}
                                </p>
                                <p className="text-sm text-gray-600">{result.metric}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Listo para tu transformación?
          </h3>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está disponible para ayudarte a lograr resultados similares
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Inicia tu Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}

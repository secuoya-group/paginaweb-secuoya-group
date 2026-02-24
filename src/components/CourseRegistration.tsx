import { ArrowRight, CheckCircle, Brain, Users, Award } from 'lucide-react';
import { useState } from 'react';

export default function CourseRegistration() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    country: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course registration submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        country: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const benefits = [
    {
      icon: Brain,
      title: 'Domina la IA',
      description: 'Aprende los fundamentos y aplicaciones prácticas de la Inteligencia Artificial',
    },
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Conecta con profesionales y expertos en el ecosistema de IA',
    },
    {
      icon: Award,
      title: 'Certificación',
      description: 'Obtén un certificado reconocido en Inteligencia Artificial',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      <style>
        {`
          .neon-lines {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
          }
          .neon-lines::before,
          .neon-lines::after {
            content: '';
            position: absolute;
            background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%);
            width: 200%;
            height: 200%;
            animation: slideNeon 20s linear infinite;
          }
          .neon-lines::before {
            top: -50%;
            left: -50%;
            animation-direction: normal;
          }
          .neon-lines::after {
            top: -50%;
            left: -50%;
            animation-direction: reverse;
            animation-duration: 25s;
          }
          @keyframes slideNeon {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(50%, 50%);
            }
          }
        `}
      </style>

      <div className="neon-lines" />

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-950 to-transparent z-50">
          <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <img
                  src="/logoAct.png"
                  alt="Secuoya"
                  className="h-12 w-auto"
                />
              </a>
              <a
                href="/"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                Volver a inicio
              </a>
            </div>
          </nav>
        </header>

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-white">El momento más</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    esperado: ¡Ahora puedes hacer
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                    realidad tu idea y gestionar
                  </span>
                  <br />
                  <span className="text-white">tu negocio con IA!</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                  Estás listo para un cambio real en la manera de tomar decisiones en tu negocio. Este es el momento
                  para inscribirse en nuestro próximo curso de Inteligencia Artificial para toma de decisiones
                  estratégicas.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Aprende los conceptos fundamentales de IA',
                    'Implementa soluciones prácticas en tu negocio',
                    'Automatiza procesos y mejora la eficiencia',
                    'Obtén ventaja competitiva en tu industria',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#registro"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Regístrate Ahora
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </div>
              </div>

                          <div className="relative h-96 lg:h-full min-h-96">
                              {/* Glow de fondo */}
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-3xl" />

                              {/* Contenedor */}
                              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-blue-500 border-opacity-30 overflow-hidden h-full flex items-center justify-center">

                                  <img
                                      src="/HombreGestionando.jpg"
                                      alt="Inteligencia Artificial"
                                      className="w-full h-full object-cover"
                                  />

                              </div>
                          </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-slide-up">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-blue-500 border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <benefit.icon className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-white font-bold mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div id="registro" className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-blue-500 border-opacity-30 shadow-2xl shadow-blue-500/10 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Regístrate en el Curso
                </h2>
                <p className="text-gray-400 mb-8">
                  Completa el formulario y nos pondremos en contacto para más información
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-2">¡Registro Exitoso!</h3>
                    <p className="text-gray-400">
                      Gracias por registrarte. Pronto recibirás información en tu email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          Apellido
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Tu apellido"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          WhatsApp/Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+34 900 123 456"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Tu empresa"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                        País
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      >
                        <option value="">Selecciona un país</option>
                        <option value="españa">España</option>
                        <option value="méxico">México</option>
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="chile">Chile</option>
                        <option value="perú">Perú</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      Registrarme en el Curso
                      <ArrowRight size={20} />
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      Al registrarte, aceptas recibir información sobre el curso
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

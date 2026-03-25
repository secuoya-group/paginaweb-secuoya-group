import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseRegistration from './components/CourseRegistration';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import { useLocation } from 'react-router-dom';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [chatAbierto, setChatAbierto] = useState(false);
  const location = useLocation();

  const path = location.pathname;

  const isCourseRoute = path === '/curso-ia';
  const isTermsRoute = path === '/terminos';
  const isPrivacyRoute = path === '/privacidad';

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data === 'chat-open') setChatAbierto(true);
      if (e.data === 'chat-close') setChatAbierto(false);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // ── Rutas secundarias ──────────────────────────────────────────────────────

  if (isCourseRoute) {
    return <CourseRegistration />;
  }

  if (isTermsRoute) {
    return (
      <div className="min-h-screen bg-white">
        <SecondaryHeader title="Términos y Condiciones" />
        <div className="pt-20">
          <TermsAndConditions />
        </div>
        <SecondaryFooter />
      </div>
    );
  }

  if (isPrivacyRoute) {
    return (
      <div className="min-h-screen bg-white">
        <SecondaryHeader title="Política de Privacidad" />
        <div className="pt-20">
          <PrivacyPolicy />
        </div>
        <SecondaryFooter />
      </div>
    );
  }

  // ── Splash ─────────────────────────────────────────────────────────────────

  if (!animationComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="w-96 opacity-100 animate-logo-fade-out">
          <img
            src={`${import.meta.env.BASE_URL}logoActual.png`}
            alt="Secuoya Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  // ── Principal ──────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <Contact />
      <Footer />

      <iframe
        src={`${import.meta.env.BASE_URL}agentechat.html`}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: chatAbierto ? '380px' : '110px',
          height: chatAbierto ? '550px' : '110px',
          border: 'none',
          zIndex: 9999,
          background: 'transparent',
          overflow: 'visible',
          transition: 'width 0.3s, height 0.3s',
        }}
        title="Chat IRIS"
      />
    </div>
  );
}

// ── Componentes auxiliares ─────────────────────────────────────────────────────

function SecondaryHeader({ title }: { title: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logoActual.png" alt="SECU IA" className="h-10 w-auto" />
          </a>
          <span className="text-gray-500 text-sm font-medium hidden sm:block">{title}</span>
          <a
            href="/"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300 font-medium text-sm flex items-center gap-1"
          >
            ← Volver a inicio
          </a>
        </div>
      </nav>
    </header>
  );
}

function SecondaryFooter() {
  return (
    <footer className="bg-gray-800 border-t border-gray-200 py-8 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Secuoya Strategy & IA. Todos los derechos reservados.</span>
        <div className="flex items-center gap-6">
          <a href="/terminos" className="hover:text-blue-500 transition-colors">Términos y Condiciones</a>
          <a href="/privacidad" className="hover:text-blue-500 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
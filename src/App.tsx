import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [chatAbierto, setChatAbierto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Escucha mensajes del iframe para saber si el chat está abierto o cerrado
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data === 'chat-open') setChatAbierto(true);
      if (e.data === 'chat-close') setChatAbierto(false);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!animationComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="w-96 opacity-100 animate-logo-fade-out">
          <img
            src={`${import.meta.env.BASE_URL}logo_oficial_secuoya.png`}
            alt="Secuoya Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

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
          // ✅ Cuando está abierto ocupa todo el espacio del chat,
          //    cuando está cerrado solo la burbuja
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

export default App;
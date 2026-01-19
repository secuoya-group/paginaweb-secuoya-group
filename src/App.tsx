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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!animationComplete) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
        <div className="w-96 opacity-100 animate-logo-fade-out">
          <img
            src="/logo_oficial_secuoya.png"
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
    </div>
  );
}

export default App;

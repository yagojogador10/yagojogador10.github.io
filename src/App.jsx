import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';
import { useEffect } from 'react';
import { initParticles } from './animations';

function App() {
  useEffect(() => {
    initParticles();
  }, []);

  return (
    <div className="min-h-screen">
      <canvas id="particle-canvas" className="fixed"></canvas>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>Yago de Souza Pereira</h1>
          <p>Desenvolvedor Full-Stack apaixonado por criar experiências digitais incríveis.</p>
          <a href="#contact" className="cta-button">Contrate-me!</a>
        </div>
      </section>
      <main className="container" style={{ position: 'relative', zIndex: 10, padding: '4rem 1rem' }}>
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
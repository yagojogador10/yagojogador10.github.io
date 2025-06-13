import { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <h1 className="slide-in">Yago de Souza Pereira</h1>
        <nav>
          <a href="#about" className="nav-link slide-in" style={{ animationDelay: '0.1s' }}>Sobre</a>
          <a href="#projects" className="nav-link slide-in" style={{ animationDelay: '0.2s' }}>Projetos</a>
          <a href="#contact" className="nav-link slide-in" style={{ animationDelay: '0.3s' }}>Contato</a>
          <a href="#contact" className="cta-button slide-in" style={{ animationDelay: '0.4s' }}>Entre em Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
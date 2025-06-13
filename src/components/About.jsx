function About() {
  return (
    <section id="about" className="fade-in" style={{ padding: '4rem 0', animationDelay: '0.2s' }} aria-labelledby="about-heading">
      <h2 id="about-heading" style={{ textAlign: 'center', marginBottom: '2rem', color: '#f1f5f9' }}>Sobre Mim</h2>
      <div className="about-container">
        <div className="relative">
          <img
            src="src/assets/yago.png"
            alt="Foto de Yago de Souza Pereira"
            className="photo-animation"
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-full border-2 border-gray-400 opacity-30 animate-pulse"
            aria-hidden="true"
          ></div>
        </div>
        <div className="text-content">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9' }}>Yago de Souza Pereira, 17 anos</h3>
          <p style={{ color: '#d1d5db', maxWidth: '672px', margin: '1rem 0' }}>
            Desenvolvedor apaixonado por tecnologia, especializado em criar soluções web modernas e eficientes. Minhas principais competências incluem:
          </p>
          <ul role="list">
            <li><span aria-hidden="true">💻</span> <strong>HTML/CSS:</strong> Construção de interfaces responsivas e estilizadas.</li>
            <li><span aria-hidden="true">🐍</span> <strong>Python:</strong> Desenvolvimento de scripts para automação e análise.</li>
            <li><span aria-hidden="true">⚡</span> <strong>JavaScript:</strong> Criação de funcionalidades interativas para web.</li>
            <li><span aria-hidden="true">⚛️</span> <strong>React:</strong> Desenvolvimento de aplicações dinâmicas e escaláveis.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
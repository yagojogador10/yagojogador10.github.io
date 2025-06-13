function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Um portfólio web moderno construído com React, CSS e animações sutis.",
      link: "#",
    },
    {
      title: "Script de Automação",
      description: "Script em Python para organização de arquivos e automação de tarefas repetitivas.",
      link: "#",
    },
    {
      title: "Aplicação Web",
      description: "Aplicação interativa com React e JavaScript, focada em experiência do usuário.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="fade-in" style={{ padding: '4rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#ffffff' }}>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
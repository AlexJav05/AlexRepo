const items = [
    {
      title: "Word Guessing Game",
      image: "/images/word.png",
      role: "Frontend dev",
      outcome: "Game with user auth, stats, and persistent storage."
    },
    {
      title: "Dynamic Pokédex (COMP125)",
      image: "/images/pokedex.png",
      role: "Frontend dev",
      outcome: "React SPA with modals, favourites, and API integration."
    },
    {
      title: "Spa web page",
      image: "/images/spa.png",
      role: "Frontend dev",
      outcome: "Responsive design with CSS Grid and Flexbox."
    }
  ];
  
  export default function Projects() {
    return (
      <section className="stack gap-lg">
        <h2>Projects</h2>
        <div className="grid">
          {items.map((p) => (
            <article key={p.title} className="card">
              <img src={p.image} alt={p.title} className="thumb" />
              <div className="stack">
                <h3>{p.title}</h3>
                <p><strong>Role:</strong> {p.role}</p>
                <p><strong>Outcome:</strong> {p.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
  
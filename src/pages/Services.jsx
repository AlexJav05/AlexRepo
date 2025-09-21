const services = [
    { title: "Web Development", desc: "Responsive sites with React and modern tooling." },
    { title: "General Programming", desc: "Clean, well-documented JavaScript / Java solutions." },
    { title: "Football Analytics", desc: "Data pipelines and scouting dashboards." }
  ];
  
  export default function Services() {
    return (
      <section className="stack gap-lg">
        <h2>Services</h2>
        <ul className="service-list">
          {services.map(s => (
            <li key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
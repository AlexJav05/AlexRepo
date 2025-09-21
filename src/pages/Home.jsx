import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="stack gap-xl">
      <h1>Welcome! 👋</h1>
      <p className="lead">
        I’m <strong>Alex Guaña</strong>, a software engineering student building web apps,
        tools for football analytics, and clean UI experiences.
      </p>
      <p className="mission">
        <strong>Mission:</strong> Craft reliable, accessible, and performant software that solves real problems.
      </p>
      <div className="actions">
        <Link className="btn" to="/about">About Me</Link>
        <Link className="btn outline" to="/projects">View Projects</Link>
      </div>
    </section>
  );
}

export default function About() {
    return (
      <section className="stack gap-lg">
        <h2>About Me</h2>
        <div className="card about">
          <img
            className="avatar"
            src="/images/about_me.jpeg"
            alt="Alex Javier Guana Santos"
          />
          <div className="stack">
            <p><strong> Name:</strong> Alex Javier Guana Santos</p>
            <p>
              I’m a developer focused on JavaScript, with projects in football (soccer)
              analytics and modern web design. I enjoy turning ideas into polished products.
            </p>
            <a className="btn small" href="/resume.pdf" download>Download Résumé (PDF)</a>
          </div>
        </div>
      </section>
    );
  }
  
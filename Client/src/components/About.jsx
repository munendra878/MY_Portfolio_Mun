import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
          Passionate Software Developer | Full Stack Developer | MCA Graduate | AI & ML Enthusiast
        </p>

        <div className="about-card">

          <div className="about-grid">

            <div className="glass-card">
              <h3>👨‍💻 Who I Am</h3>
              <p>
                My name is <strong>Baghel Munendrasinh Radheshyam</strong>.
                I completed my <strong>Bachelor of Computer Applications
                (BCA)</strong> and currently pursuing the
                <strong> Final Year of Master of Computer Applications (MCA)</strong>
                at <strong>Ganpat University</strong>.
              </p>
            </div>

            <div className="glass-card">
              <h3>🎓 Education</h3>
              <p>
                I completed my <strong>10th Standard</strong>, followed by
                <strong> 12th Commerce</strong>, before entering the IT field.
                This journey gave me strong analytical and problem-solving
                abilities and inspired me to pursue software development.
              </p>
            </div>


            <div className="glass-card">
              <h3>🚀 Currently Learning</h3>
              <p>
                Expanding my expertise in
                <strong> Artificial Intelligence</strong>,
                <strong> Machine Learning</strong>,
                <strong> Full Stack Development</strong>, and modern software
                engineering practices.
              </p>
            </div>

            <div className="glass-card">
              <h3>🎯 Career Goal</h3>
              <p>
                My objective is to start my professional career as a Software
                Developer where I can contribute to innovative projects,
                improve my technical expertise, and grow into a skilled
                Full Stack Engineer.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
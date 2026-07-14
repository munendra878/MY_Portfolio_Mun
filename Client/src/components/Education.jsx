import "./Education.css";

export default function Education() {
  return (
    <section id="education"
    style={{ padding: "80px 20px", background: "#ece5df", color: "#1b1919" }}
    >
      <h2 className="section-title" style={{ textAlign: 'center', color: '#4a0606', marginBottom: '20px' }}>
        Education
      </h2>

      <div className="education-grid">
        <div className="education-card">
          <h3>Master of Computer Applications (MCA)</h3>
          <span className="duration">2024 – 2026</span>
          <p className="institution">Ganpat University</p>
          <p><strong>CGPA:</strong> 8.90</p>
          <p>
            Relevant coursework: Cloud Computing, Advanced Programming,
            Data Science, Artificial Intelligence, and Software Engineering.
          </p>
        </div>

        <div className="education-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <span className="duration">2021 – 2024</span>
          <p className="institution">
            Shri Sarvajanik BCA & PGDCA College
          </p>
          <p><strong>CGPA:</strong> 7.64</p>
          <p>
            Studied Programming, DBMS, Operating Systems, Web Development,
            Networking, and Software Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
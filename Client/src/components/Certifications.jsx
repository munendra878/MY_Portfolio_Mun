import "./Certifications.css";

export default function Certifications() {
  const certifications = [
    {
      id: "01",
      title: "Social Media Intern",
      company: "RealThreadX",
      description: "Internship Completion Certificate",
      file: "/assets/Baghel Munendrasinh Radheshyam.pdf",
    },
    {
      id: "02",
      title: "Full Stack Developer Internship",
      company: "BrainyBeam Info Tech Pvt. Ltd.",
      description: "Internship Completion Certificate",
      file: "/assets/Baghel Munendrasinh Radheshyam on going certificate.png",
    },
    {
      id: "03",
      title: "IT - ITES SSC NASSCOM",
      company: "Experiential Learning",
      description:
        "Essentials Of Solution Development In IT (SSC/N8149), NSQF Level 5",
      file: "/assets/12200.pdf",
    },
    {
      id: "04",
      title: "Springer CCSS",
      company: "Certificate Of Completion",
      description: "International Conference Participation",
      file: "/assets/108_COMS_25_COMS-2025.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-number">{cert.id}</div>

            <h3>{cert.title}</h3>

            <h4>{cert.company}</h4>

            <p>{cert.description}</p>

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

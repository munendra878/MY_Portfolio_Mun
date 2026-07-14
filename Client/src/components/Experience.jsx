import "./Experience.css";
export default function Experience() {
  return (
<section id="experience" className="experience-section">
  <h2 className="section-title" style={{ marginBottom: "50px", color: "#f3efef" }}>
    Experience
  </h2>

  <div className="experience-grid">
    

    <div className="experience-card">
      <span className="period">2025</span>
      <h3>Social Media Intern</h3>
      <img
        src="/assets/realthreadx-logo.png"
        alt="RealThreadX Logo"
        className="company-logo"
      />
      <h4>RealThreadX</h4>
     
      <a href="/assets/brainy beam offer letter.pdf"
         target="_blank"
         rel="noreferrer"
         className="doc-btn">
        View Cover Letter
      </a>
    </div>

    <div className="experience-card">
      <span className="period">Jan 2026 – Apr 2026</span>
      <h3>MERN Stack Intern</h3>
      <img
        src="/assets/brainybeam-logo.png"
        alt="BrainyBeam Logo"
        length="10"
        bredth="10"
        className="company-logo"
      />
      <h4>BrainyBeam Info Tech Pvt. Ltd.</h4>
    
      <a href="/assets/Baghel Munendrasinh Mern ganpat offer letter.pdf"
         target="_blank"
         rel="noreferrer"
         className="doc-btn">
        View Offer Letter
      </a>
    </div>
  </div>
</section>
  );
}
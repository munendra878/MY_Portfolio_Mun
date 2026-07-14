import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <h1>
            <span>Hello, I'm</span>
            <span style={{ color: "#16d6eb" }}> Munendrasinh Radheshyam Baghel</span>
          </h1>

          <div className="typing-text">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Front-End Developer",
                2000,
                "Android Developer",
                2000,
                "PHP Developer",
                2000,
                ".NET Developer",
                2000,
                "Java Developer",
                2000,
                "Python Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p>
            I build modern, scalable and responsive web applications
            that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a className="btn" href="assets/Resume-Mun.pdf" download>
              Download Resume
            </a>

            <a
              className="whatsapp-btn"
              href="https://wa.me/918000819488"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>

        </div>

        {/* Right Image */}

        <div className="hero-image">
          <img
            src="/profile.png"
            alt="Munendrasinh Baghel"
            className="profile-img"
          />
        </div>

      </div>
    </section>
  );
}
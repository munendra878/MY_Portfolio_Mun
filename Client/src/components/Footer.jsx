import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="contact-box">
            <i className="fa fa-envelope"></i>
            <div>
              <h4>Email Me</h4>
              <p>mohitbaghel086@gmail.com</p>
            </div>
          </div>

          <div className="contact-box">
            <i className="fa fa-phone"></i>
            <div>
              <h4>Call Me</h4>
              <p>+91 8000819488</p>
            </div>
          </div>

          <div className="contact-box">
            <i className="fa fa-location-dot"></i>
            <div>
              <h4>Location</h4>
              <p>Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/munendra878"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/github.jpg" alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/munendrasinh-radheshyam-baghel-707946361/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/link.jpg" alt="LinkedIn" />
          </a>

          <a
            href="https://wa.me/918000819488"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/icons/whatsapp.jpg" alt="WhatsApp" />
          </a>
        </div>

        <p className="footer-copy">
          © 2025 Munendrasinh Baghel. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "#ece5df",
        color: "#1b1919",
      }}
    >
      <h2
        className="section-title"
        style={{
          textAlign: "center",
          color: "#4a0606",
          marginBottom: "50px",
        }}
      >
        Contact Me
      </h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            I'm always open to discussing new opportunities, freelance
            projects, internships, or collaborations. Feel free to send me a
            message.
          </p>

        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
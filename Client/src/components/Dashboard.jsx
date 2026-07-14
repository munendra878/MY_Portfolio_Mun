import { useState, useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const toggleTheme = () => {
    setLightMode(!lightMode);
  };


  // Apply theme to body
  useEffect(() => {

    if(lightMode){
      document.body.classList.add("light");
    }
    else{
      document.body.classList.remove("light");
    }

  },[lightMode]);


  return (
    <section 
      className={`dashboard ${lightMode ? "light" : ""}`}
      id="dashboard"
    >

      <header className="dashboard-header">


        {/* Logo */}
        <div className="logo">
          <a href="#home">
            <img 
              src="/logo.png" 
              alt="Munendra Portfolio Logo"
              
            />
          </a>
        </div>

        {/* Hamburger */}
        <div
          className="menu-toggle"
          onClick={toggleMenu}
        >
          <i className={`fa ${menuOpen ? "fa-times":"fa-bars"}`}></i>
        </div>



        {/* Navigation */}
        <nav className={menuOpen ? "active":""}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Theme Button */}
        <div
          className="theme-toggle"
          onClick={toggleTheme}
        >

          <i 
          className={`fa ${lightMode ? "fa-sun":"fa-moon"}`}
          ></i>

        </div>

<link 
rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
      </header>

    </section>
  );
}